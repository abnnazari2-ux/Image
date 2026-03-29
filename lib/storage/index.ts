import { StorageProvider } from './storage-provider';
import { LocalStorageProvider } from './local-storage';

function createStorageProvider(): StorageProvider {
  const provider = process.env.STORAGE_PROVIDER ?? 'local';

  if (provider === 's3') {
    // Lazy import to avoid requiring AWS SDK when not needed
    const { S3StorageProvider } = require('./s3-storage');
    return new S3StorageProvider();
  }

  return new LocalStorageProvider();
}

export const storageProvider = createStorageProvider();
