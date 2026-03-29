import { randomUUID } from 'crypto';
import path from 'path';
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { StorageProvider } from './storage-provider';

export class S3StorageProvider implements StorageProvider {
  private client: S3Client;
  private bucket: string;
  private cdnBaseUrl?: string;

  constructor() {
    this.bucket = process.env.S3_BUCKET ?? '';
    this.cdnBaseUrl = process.env.S3_CDN_URL;
    this.client = new S3Client({
      region: process.env.S3_REGION ?? 'us-east-1',
      endpoint: process.env.S3_ENDPOINT,
      forcePathStyle: !!process.env.S3_ENDPOINT,
      credentials: process.env.S3_ACCESS_KEY_ID
        ? {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
          }
        : undefined,
    });
  }

  async save(buffer: Buffer, filename: string, mimeType: string, folder: 'uploads' | 'edited') {
    const extension = path.extname(filename) || '.png';
    const key = `${folder}/${Date.now()}-${randomUUID()}${extension}`;

    await this.client.send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: buffer,
        ContentType: mimeType,
      })
    );

    const url = this.cdnBaseUrl ? `${this.cdnBaseUrl}/${key}` : await this.getSignedUrl(key);

    return { url, key, size: buffer.byteLength };
  }

  async read(key: string): Promise<Buffer> {
    const response = await this.client.send(
      new GetObjectCommand({ Bucket: this.bucket, Key: key })
    );
    const stream = response.Body;
    if (!stream) throw new Error('Empty response body from S3');
    const chunks: Buffer[] = [];
    for await (const chunk of stream as AsyncIterable<Buffer>) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  }

  async delete(key: string): Promise<void> {
    await this.client.send(
      new DeleteObjectCommand({ Bucket: this.bucket, Key: key })
    );
  }

  async getSignedUrl(key: string, expiresIn = 3600): Promise<string> {
    return getSignedUrl(
      this.client,
      new GetObjectCommand({ Bucket: this.bucket, Key: key }),
      { expiresIn }
    );
  }
}
