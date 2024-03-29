import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

import { postBuild } from './src/plugins/postBuild';
import { createAliases } from './vite.common';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: createAliases(),
  },
  plugins: [
    react(),
    // check: https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/
    dts(),
    postBuild(),
  ],

  // https://vitejs.dev/guide/build.html#library-mode
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'Reservation Grid',
      // the proper extensions will be added
      fileName: 'reservation-grid',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          reactDOM: 'ReactDOM',
        },
      },
    },
  },
});
