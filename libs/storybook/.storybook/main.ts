import type { StorybookConfig } from '@storybook/angular';

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
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
