import type { StorybookConfig } from '@storybook/react-vite'
import { withoutVitePlugins } from '@storybook/builder-vite'
import istanbul from 'vite-plugin-istanbul'

function istanbulPlugin() {
  const defaultExtensions = [
    '.js',
    '.cjs',
    '.mjs',
    '.ts',
    '.tsx',
    '.jsx',
    '.vue',
    '.svelte',
  ]
  const testFileExtensions = defaultExtensions
    .map((extension) => extension.slice(1))
    .join(',')

  return istanbul({
    extension: defaultExtensions,
    exclude: [
      '.storybook/**',
      'coverage/**',
      'packages/*/test{,s}/**',
      '**/*.d.ts',
      'test{,s}/**',
      `test{,-*}.{${testFileExtensions}}`,
      `**/*{.,-}{spec,stories,types}.{${testFileExtensions}}`,
      '**/__tests__/**',
      '**/*-entry.js',
    
      /* Exclude common development tool configuration files */
      '**/{ava,babel,nyc}.config.{js,cjs,mjs}',
      '**/jest.config.{js,cjs,mjs,ts}',
      '**/{karma,rollup,webpack}.config.js',
      '**/.{eslint,mocha}rc.{js,cjs}',
    ],
  })
}

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // '@storybook/addon-coverage',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
    docsMode: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    process.env.NODE_ENV = 'development'
    return {
      ...config,
      plugins: (await withoutVitePlugins(config.plugins, [
        'vite:dts',
        'vite:lib-inject-css',
      ])).concat([
        istanbulPlugin(),
      ]),
    }
  }
}
export default config
