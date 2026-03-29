export interface StorageProvider {
  save(buffer: Buffer, filename: string, mimeType: string, folder: 'uploads' | 'edited'): Promise<{ url: string; key: string; size: number }>;
  read(key: string): Promise<Buffer>;
  delete(key: string): Promise<void>;
  getSignedUrl?(key: string, expiresIn?: number): Promise<string>;
}
