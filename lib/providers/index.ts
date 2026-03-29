import { ImageEditorProvider } from './image-editor-provider';
import { MockImageEditorProvider } from './mock-image-editor-provider';

function createImageEditorProvider(): ImageEditorProvider {
  const provider = process.env.IMAGE_EDITOR_PROVIDER ?? 'mock';

  if (provider === 'replicate') {
    const { ReplicateImageEditorProvider } = require('./replicate-provider');
    return new ReplicateImageEditorProvider();
  }

  return new MockImageEditorProvider();
}

export const imageEditorProvider = createImageEditorProvider();
