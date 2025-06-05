import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonIconComponent } from './button-icon.component';

const meta: Meta<ButtonIconComponent> = {
  title: 'Angular Components/Buttons (cta)/Icon',
  component: ButtonIconComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonIconComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
