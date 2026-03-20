import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

import autoprefixer from 'autoprefixer'

import pkg from './package.json' assert { type: 'json' }

export default defineConfig(({ mode }) => ({
  plugins: [
    react({ jsxRuntime: 'classic' }),
    libInjectCss(),
  ],
  css: {
    modules: mode === 'production' ? {
      generateScopedName: '_[hash:base64:4]',
    } : {},
    postcss: {
      plugins: [
        autoprefixer,
      ],
    },
  },
  build: {
    emptyOutDir: false,
    target: 'es2015',
    sourcemap: true,
    lib: {
      formats: ['es', 'cjs'],
      name: 'mdrdReact',
      entry: 'src/react.ts',
      fileName: (format) => format === 'es' ? 'react.mjs' : 'react.js',
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies)),
      output: {
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
        sourcemap: true,
      },
    },
  },
}))