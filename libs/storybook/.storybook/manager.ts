import { addons } from '@storybook/manager-api';
import { API_PreparedIndexEntry, API_StatusObject } from '@storybook/types';
import rizivInamiTheme from './rizivInamiTheme';

addons.setConfig({
  theme: rizivInamiTheme,
  enableShortcuts: false,
  sidebar: {
    filters: {
      patterns: (
        item: API_PreparedIndexEntry & {
          status: Record<string, API_StatusObject | null>;
        }
      ): boolean => {
        return !(item.tags ?? []).includes('hideInSidebar');
      },
    },
  },
});
