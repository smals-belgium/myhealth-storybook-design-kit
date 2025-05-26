import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';

const meta: Meta<ButtonToggleComponent> = {
  title: 'Components/Buttons (cta)/Toggle',
  component: ButtonToggleComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonToggleComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
