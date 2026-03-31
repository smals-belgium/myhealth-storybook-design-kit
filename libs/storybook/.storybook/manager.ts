import { addons } from 'storybook/manager-api';
import { API_FilterFunction } from 'storybook/internal/types';
import rizivInamiTheme from './rizivInamiTheme';

const hideInSidebarFilter: API_FilterFunction = (item) => {
  return !(item.tags ?? []).includes('hideInSidebar');
};

addons.setConfig({
  theme: rizivInamiTheme,
  enableShortcuts: false,
  sidebar: {
    filters: {
      patterns: hideInSidebarFilter,
    },
  },
});
