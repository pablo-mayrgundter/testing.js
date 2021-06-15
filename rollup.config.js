import pkg from './package.json';

export default {
  input: 'testing.js',
  output: [{
    file: pkg.module, // the name of our esm library
    format: 'esm', // the format of choice
    sourcemap: true, // ask rollup to include sourcemaps
  },
  {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  }],
  external: ['vue']
};
