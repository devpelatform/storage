import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    entry: ['src/index.ts', 'src/helpers.ts', 'src/cloudinary.ts', 'src/s3.ts'],
    format: ['esm', 'cjs'],
    splitting: true,
    cjsInterop: true,
    skipNodeModulesBundle: true,
    treeshake: false,
    metafile: true,
  };
});
