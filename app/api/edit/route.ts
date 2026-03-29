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
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const sourceAsset = await dbApi.getAsset(parsed.data.sourceAssetId);
    if (!sourceAsset) {
      return NextResponse.json({ error: 'Unknown source asset' }, { status: 404 });
    }

    const moderationEvents = moderatePrompt(parsed.data.prompt);
    if (moderationEvents.some((e) => e.blocked)) {
      return NextResponse.json({ error: 'Prompt blocked', moderationEvents }, { status: 400 });
    }

    const job = await dbApi.createJob({
      status: 'RUNNING',
      progress: 15,
      sourceAssetId: parsed.data.sourceAssetId,
      prompt: {
        id: randomUUID(),
        text: parsed.data.prompt,
        strength: parsed.data.strength,
        createdAt: new Date().toISOString(),
      },
      moderationEvents,
    });

    const result = await imageEditorProvider.generateEdit({
      sourceKey: sourceAsset.storageKey,
      prompt: parsed.data.prompt,
      strength: parsed.data.strength,
    });

    const stored = await storageProvider.save(result.outputBuffer, `edited-${Date.now()}.png`, result.mimeType, 'edited');
    const resultAsset = await dbApi.createAsset({
      filename: 'edited.png',
      mimeType: result.mimeType,
      sizeBytes: stored.size,
      url: stored.url,
      storageKey: stored.key,
      assetType: 'EDITED',
    });

    await dbApi.updateJob(job.id, {
      status: 'SUCCEEDED',
      progress: 100,
      result: { id: randomUUID(), assetId: resultAsset.id, createdAt: new Date().toISOString(), metrics: result.metrics },
    });

    return NextResponse.json({ jobId: job.id });
  } catch (error) {
    return NextResponse.json({ error: 'Edit failed', details: String(error) }, { status: 500 });
  }
}
