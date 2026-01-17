import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['./packages/db/vitest.config.mts', './apps/admin/vitest.config.mts'],
  },
});
