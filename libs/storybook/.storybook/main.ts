// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/angular';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src',
      files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    },
    {
      directory: '../../custom-ui-components',
      files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    },
  ],

  addons: [getAbsolutePath('@storybook/addon-links'), getAbsolutePath('@storybook/addon-docs')],

  framework: {
    name: getAbsolutePath('@storybook/angular'),
    options: {},
  },

  staticDirs: ['../public'],
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
