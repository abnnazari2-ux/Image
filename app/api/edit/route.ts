import { randomUUID } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { editSchema } from '@/lib/validation/schemas';
import { dbApi } from '@/lib/db';
import { moderatePrompt } from '@/lib/moderation';
import { imageEditorProvider } from '@/lib/providers';
import { storageProvider } from '@/lib/storage';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = editSchema.safeParse(body);
    if (!parsed.success) {
      const errors = parsed.error.flatten();
      const message = Object.values(errors.fieldErrors).flat().join('. ') || 'Invalid request';
      return NextResponse.json({ error: message }, { status: 400 });
    }

    const { sourceAssetId, prompt, strength } = parsed.data;

    const sourceAsset = await dbApi.getAsset(sourceAssetId);
    if (!sourceAsset) {
      return NextResponse.json({ error: 'Source image not found.' }, { status: 404 });
    }

    const moderationEvents = moderatePrompt(prompt);
    if (moderationEvents.some((e) => e.blocked)) {
      return NextResponse.json({
        error: 'Your prompt was blocked by our content policy.',
        moderationEvents,
      }, { status: 400 });
    }

    // Create the job record
    const job = await dbApi.createJob({
      status: 'RUNNING',
      progress: 15,
      sourceAssetId,
      prompt: {
        id: randomUUID(),
        text: prompt,
        strength,
        createdAt: new Date().toISOString(),
      },
      moderationEvents,
    });

    // Update progress to 40% before starting generation
    await dbApi.updateJob(job.id, { progress: 40 });

    try {
      const result = await imageEditorProvider.generateEdit({
        sourceKey: sourceAsset.storageKey,
        prompt,
        strength,
      });

      await dbApi.updateJob(job.id, { progress: 80 });

      const stored = await storageProvider.save(
        result.outputBuffer,
        `edited-${Date.now()}.png`,
        result.mimeType,
        'edited'
      );

      const resultAsset = await dbApi.createAsset({
        filename: `edited-${job.id}.png`,
        mimeType: result.mimeType,
        sizeBytes: stored.size,
        url: stored.url,
        storageKey: stored.key,
        assetType: 'EDITED',
      });

      await dbApi.updateJob(job.id, {
        status: 'SUCCEEDED',
        progress: 100,
        result: {
          id: randomUUID(),
          assetId: resultAsset.id,
          createdAt: new Date().toISOString(),
          metrics: result.metrics,
        },
      });

      return NextResponse.json({ jobId: job.id });
    } catch (genError) {
      await dbApi.updateJob(job.id, {
        status: 'FAILED',
        progress: 100,
        errorMessage: genError instanceof Error ? genError.message : 'Generation failed',
      });
      return NextResponse.json({ jobId: job.id, error: 'Generation failed' }, { status: 500 });
    }
  } catch (error) {
    console.error('Edit error:', error);
    return NextResponse.json({ error: 'Edit request failed. Please try again.' }, { status: 500 });
  }
}
