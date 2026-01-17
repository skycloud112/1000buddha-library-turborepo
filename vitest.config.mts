import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      './packages/book/vitest.config.mts',
      './packages/db-impl/vitest.config.mts',
      './apps/library-tools/vitest.config.mts',
    ],
  },
});
