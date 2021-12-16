import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json'

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
  plugins: [
    sass({ insert: true }),
    typescript(),
    resolve(),
  ],
  external: ['react', 'react-dom']
}
