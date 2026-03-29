import { NextResponse } from 'next/server';
import { dbApi } from '@/lib/db';

export async function GET() {
  const jobs = await dbApi.listJobs(20);
  return NextResponse.json({ jobs });
}
