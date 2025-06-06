import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Angular Components/Buttons (cta)/Button',
  component: ButtonComponent,
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Flat: Story = {
  args: {
    type: 'flat',
    disabled: false,
  },
};

Flat.storyName = 'Primary';

export const Stroked: Story = {
  args: {
    type: 'stroked',
    disabled: false,
  },
};

Stroked.storyName = 'Secondary';

export const Raised: Story = {
  args: {
    type: 'raised',
    disabled: false,
  },
};

export const AllVariants: Story = {
  args: {
    type: 'allVariants',
    disabled: false,
  },
};

AllVariants.storyName = 'All Button Variants';
