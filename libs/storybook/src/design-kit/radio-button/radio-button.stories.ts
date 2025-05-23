import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'Components/Radio Button',
  component: RadioButtonComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
