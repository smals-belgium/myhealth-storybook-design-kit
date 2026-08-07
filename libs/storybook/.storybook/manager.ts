import { addons } from 'storybook/manager-api';
import { API_PreparedIndexEntry } from 'storybook/internal/types';
import rizivInamiTheme from './rizivInamiTheme';

addons.setConfig({
  theme: rizivInamiTheme,
  enableShortcuts: false,
  sidebar: {
    filters: {
      patterns: (item: API_PreparedIndexEntry): boolean => {
        return !(item.tags ?? []).includes('hideInSidebar');
      },
    },
  },
});
