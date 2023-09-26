import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

import { importAssertionsPlugin } from 'rollup-plugin-import-assert';
import { importAssertions } from 'acorn-import-assertions';

import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/lib/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  acornInjectPlugins: [ importAssertions ],
  plugins: [
    sass({ insert: true }),
    typescript(),
    resolve(),
    importAssertionsPlugin(),
  ],
  external: ['react', 'react-dom']
}
