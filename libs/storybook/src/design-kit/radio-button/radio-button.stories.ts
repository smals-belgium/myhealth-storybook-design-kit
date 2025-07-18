import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'Angular Components/Selectors/Radio Button',
  component: RadioButtonComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    items: {
      control: { type: 'number' },
    },
    layout: {
      options: ['vertical', 'horizontal'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    items: 2,
    layout: 'horizontal',
    disabled: false,
  },
};
