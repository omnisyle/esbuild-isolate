#!/usr/bin/env node

import * as esbuild from 'esbuild'

let result = await esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
  absWorkingDir: '/Users/sile/dev/esbuild-isolate/isolate',
  target: 'es2020',
  // external: ['lodash'],
  // nodePaths: ['/Users/sile/dev/esbuild-isolate/isolate/node_modules'],
  alias: {
    'step_main': '../src/merchant.js',
  }
})
console.log(result)
