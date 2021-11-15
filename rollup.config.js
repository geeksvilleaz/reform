import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const input = 'src/index.ts';

const plugins = [
  typescript({
    typescript: require('typescript')
  }),

  sass({
    insert: true
  })
];

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    plugins,
    external
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    plugins,
    external
  }
];
