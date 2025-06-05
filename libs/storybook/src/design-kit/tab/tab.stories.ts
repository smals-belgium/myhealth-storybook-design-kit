import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { TabComponent } from './tab.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<TabComponent> = {
  title: 'Angular Components/Tabs',
  component: TabComponent,
  argTypes: {
    thirdTabDisabled: {
      control: { type: 'boolean' },
      description: "Disable the third tab",
      name: "Disable third tab",
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
    thirdTabDisabled: false,
  },
};
