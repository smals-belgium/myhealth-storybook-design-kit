import type { Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';

const meta: Meta<SlideToggleComponent> = {
  title: 'myh_internal/Slide Toggle',
  tags: ['hideInSidebar'],
  component: SlideToggleComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<SlideToggleComponent>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};
