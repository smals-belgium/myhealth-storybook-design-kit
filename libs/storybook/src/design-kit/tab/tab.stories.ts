import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { TabComponent } from './tab.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<TabComponent> = {
  title: 'Components/Tabs',
  component: TabComponent,
  argTypes: {
    disabled: {
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

type Story = StoryObj<TabComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
