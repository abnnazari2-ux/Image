import { NextRequest, NextResponse } from 'next/server';
import { dbApi } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 100);
    const jobs = await dbApi.listJobs(limit);
    return NextResponse.json({ jobs });
  } catch (error) {
    console.error('History fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch history' }, { status: 500 });
  }
}
