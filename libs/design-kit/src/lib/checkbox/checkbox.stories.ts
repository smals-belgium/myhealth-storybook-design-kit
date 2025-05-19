import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
