import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<TableComponent> = {
  title: 'Angular Components/Table',
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

export const Desktop: Story = {
  args: {
    search: false,
    expandEnabled: false,
    isSelectable: false,
    isLoading: false,
    isMobile: false,
  }
};

Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
}

export const Mobile: Story = {
  args: {
    search: false,
    expandEnabled: false,
    isSelectable: false,
    isLoading: false,
    isMobile: true,
  }
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
}
