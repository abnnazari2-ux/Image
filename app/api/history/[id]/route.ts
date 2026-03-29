import { NextResponse } from 'next/server';
import { dbApi } from '@/lib/db';

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const deleted = await dbApi.deleteJob(params.id);
  if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
