import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'myh_internal/Checkbox',
  tags: ['hideInSidebar'],
  component: CheckboxComponent,
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
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    disabled: false,
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    disabled: false,
    checked: true,
  },
};
