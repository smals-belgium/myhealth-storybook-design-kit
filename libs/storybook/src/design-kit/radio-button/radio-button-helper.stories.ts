import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'myh_internal/Radio Button',
  tags: ['hideInSidebar'],
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
    items: 3,
    selectedItem: 0,
    layout: 'vertical',
    disabled: false,
  },
};
