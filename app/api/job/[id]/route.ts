import { NextResponse } from 'next/server';
import { dbApi } from '@/lib/db';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const job = await dbApi.getJob(params.id);
  if (!job) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(job);
}
