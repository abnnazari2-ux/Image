import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { StorageProvider } from './storage-provider';

export class LocalStorageProvider implements StorageProvider {
  private baseDir: string;

  constructor(baseDir?: string) {
    this.baseDir = baseDir ?? path.join(process.cwd(), 'public');
  }

  async save(buffer: Buffer, filename: string, _mimeType: string, folder: 'uploads' | 'edited') {
    const extension = path.extname(filename) || '.png';
    const basename = `${Date.now()}-${randomUUID()}${extension}`;
    const dir = path.join(this.baseDir, folder);
    await fs.mkdir(dir, { recursive: true });
    const key = `${folder}/${basename}`;
    const fullPath = path.join(this.baseDir, key);
    await fs.writeFile(fullPath, buffer);
    return { url: `/${key}`, key, size: buffer.byteLength };
  }

  async read(key: string): Promise<Buffer> {
    return fs.readFile(path.join(this.baseDir, key));
  }

  async delete(key: string): Promise<void> {
    try {
      await fs.unlink(path.join(this.baseDir, key));
    } catch {
      // File may already be deleted
    }
  }
}
