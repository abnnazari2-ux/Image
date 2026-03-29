import { NextRequest, NextResponse } from 'next/server';
import { uploadSchema } from '@/lib/validation/schemas';
import { storageProvider } from '@/lib/storage';
import { dbApi } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Missing file' }, { status: 400 });
    }

    const parsed = uploadSchema.safeParse({ fileName: file.name, mimeType: file.type, size: file.size });
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const stored = await storageProvider.save(buffer, file.name, file.type, 'uploads');
    const asset = await dbApi.createAsset({
      filename: file.name,
      mimeType: file.type,
      sizeBytes: stored.size,
      url: stored.url,
      storageKey: stored.key,
      assetType: 'ORIGINAL',
    });

    return NextResponse.json({ assetId: asset.id, url: asset.url });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed', details: String(error) }, { status: 500 });
  }
}
