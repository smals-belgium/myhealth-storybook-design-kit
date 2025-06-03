import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import {provideAnimations} from "@angular/platform-browser/animations";

const meta: Meta<TableComponent> = {
  component: TableComponent,
  argTypes: {
    search: {
      control: { type: 'boolean' },
    },
    expandEnabled: {
      control: { type: 'boolean' },
    },
    isSelectable: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    isMobile: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: {
    search: false,
    expandEnabled: false,
    isSelectable: false,
    isLoading: false,
    isMobile: false,
  },
};

Default.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  }
};

export const Filter: Story = {
  args: {
    search: true,
    expandEnabled: false,
    isSelectable: false,
    isLoading: false,
    isMobile: false,
  },
};

Filter.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  }
};

export const Selection: Story = {
  args: {
    search: false,
    expandEnabled: false,
    isSelectable: true,
    isLoading: false,
    isMobile: false,
  },
};

Selection.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  }
};
