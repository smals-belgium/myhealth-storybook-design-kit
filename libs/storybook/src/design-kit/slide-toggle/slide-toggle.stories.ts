import type { Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';

const meta: Meta<SlideToggleComponent> = {
  title: 'Angular Components/Slide Toggle',
  component: SlideToggleComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<SlideToggleComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
