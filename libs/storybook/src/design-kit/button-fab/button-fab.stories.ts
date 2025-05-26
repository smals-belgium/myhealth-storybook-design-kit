import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonFabComponent } from './button-fab.component';

const meta: Meta<ButtonFabComponent> = {
  title: 'Components/Buttons (cta)/FAB',
  component: ButtonFabComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonFabComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
