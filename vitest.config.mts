import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['./packages/db/vitest.config.mts', './apps/library-tools/vitest.config.mts'],
  },
});
