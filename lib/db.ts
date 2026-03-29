import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { ImageAsset, ImageJob, JobWithAssets } from '@/lib/types';

const DATA_DIR = path.join(process.cwd(), '.data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

interface DBState {
  assets: ImageAsset[];
  jobs: ImageJob[];
}

const baseState: DBState = { assets: [], jobs: [] };

async function ensureDb() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DB_FILE);
  } catch {
    await fs.writeFile(DB_FILE, JSON.stringify(baseState, null, 2), 'utf-8');
  }
}

async function readDb(): Promise<DBState> {
  await ensureDb();
  const raw = await fs.readFile(DB_FILE, 'utf-8');
  return JSON.parse(raw) as DBState;
}

async function writeDb(data: DBState) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export async function createAsset(input: Omit<ImageAsset, 'id' | 'createdAt'>): Promise<ImageAsset> {
  const db = await readDb();
  const asset: ImageAsset = { ...input, id: randomUUID(), createdAt: new Date().toISOString() };
  db.assets.unshift(asset);
  await writeDb(db);
  return asset;
}

export async function createJob(job: Omit<ImageJob, 'id' | 'createdAt' | 'updatedAt'>): Promise<ImageJob> {
  const db = await readDb();
  const now = new Date().toISOString();
  const newJob: ImageJob = { ...job, id: randomUUID(), createdAt: now, updatedAt: now };
  db.jobs.unshift(newJob);
  await writeDb(db);
  return newJob;
}

export async function updateJob(id: string, patch: Partial<ImageJob>): Promise<ImageJob | null> {
  const db = await readDb();
  const idx = db.jobs.findIndex((j) => j.id === id);
  if (idx < 0) return null;
  db.jobs[idx] = { ...db.jobs[idx], ...patch, updatedAt: new Date().toISOString() };
  await writeDb(db);
  return db.jobs[idx];
}

export async function getAsset(id: string): Promise<ImageAsset | null> {
  const db = await readDb();
  return db.assets.find((a) => a.id === id) ?? null;
}

export async function getJob(id: string): Promise<JobWithAssets | null> {
  const db = await readDb();
  const job = db.jobs.find((j) => j.id === id);
  if (!job) return null;
  const sourceAsset = db.assets.find((a) => a.id === job.sourceAssetId);
  if (!sourceAsset) return null;
  const resultAsset = job.result ? db.assets.find((a) => a.id === job.result?.assetId) : undefined;
  return { ...job, sourceAsset, resultAsset };
}

export async function listJobs(limit = 20): Promise<JobWithAssets[]> {
  const db = await readDb();
  return db.jobs.slice(0, limit).map((job) => {
    const sourceAsset = db.assets.find((a) => a.id === job.sourceAssetId)!;
    const resultAsset = job.result ? db.assets.find((a) => a.id === job.result?.assetId) : undefined;
    return { ...job, sourceAsset, resultAsset };
  });
}

export async function deleteJob(id: string): Promise<boolean> {
  const db = await readDb();
  const startLen = db.jobs.length;
  db.jobs = db.jobs.filter((j) => j.id !== id);
  await writeDb(db);
  return db.jobs.length !== startLen;
}

export const dbApi = { createAsset, createJob, updateJob, getAsset, getJob, listJobs, deleteJob };
