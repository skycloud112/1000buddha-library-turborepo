import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    testTimeout: 3000,
    hookTimeout: 1000,
    fileParallelism: false,
    sequence: {
      concurrent: false,
    },
  },
});
