import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

import autoprefixer from 'autoprefixer'

import pkg from './package.json' assert { type: 'json' }

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({ jsxRuntime: 'classic' }),
    dts({
      entryRoot: 'src',
      exclude: [
        '**/*.stories.ts?',
        '**/__tests__/**',
        '**/*.test-d.ts',
      ],
    }),
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
    target: 'es2015',
    sourcemap: true,
    lib: {
      formats: ['es', 'cjs', 'umd'],
      name: pkg.name,
      entry: 'src/index.ts',
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies)),
      output: {
        // Put chunk files at <output>/chunks
        chunkFileNames: 'chunks/[name].[hash].js',
        // Put chunk styles at <output>/styles
        assetFileNames: 'assets/[name][extname]',
        sourcemap: true,
      },
    },
  },
}))
