import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { createAliases } from './vite.common';

export default defineConfig({
  resolve: {
    alias: createAliases(),
  },
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist-gh',
  },
});
