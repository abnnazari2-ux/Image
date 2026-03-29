import { NextResponse } from 'next/server';
import { dbApi } from '@/lib/db';

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const deleted = await dbApi.deleteJob(params.id);
    if (!deleted) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
  }
}
