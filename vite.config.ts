import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [
    tsconfigPaths({
      loose: true,
    }),
    vanillaExtractPlugin({
    }),
  ],
});
