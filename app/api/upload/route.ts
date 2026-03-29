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

    const parsed = uploadSchema.safeParse({
      fileName: file.name,
      mimeType: file.type,
      size: file.size,
    });
    if (!parsed.success) {
      const errors = parsed.error.flatten();
      const message = Object.values(errors.fieldErrors).flat().join('. ') || 'Invalid file';
      return NextResponse.json({ error: message }, { status: 400 });
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
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 });
  }
}
