/** @type { import('@storybook/html').Preview } */
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['My Health belgium.be', 'Foundations', 'Legacy', 'Components', ['Readme', '*']],
      },
    },
    viewport: {
      viewports: {
        mobile: MINIMAL_VIEWPORTS['mobile1'],
      },
      viewport: { defaultViewport: 'mobile' },
    },
    docs: {
      container: DocsContainer,
      page: DocsPage, // You can create your own component to replace DocsPage
    },
  },
};

export default preview;
