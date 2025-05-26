import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Buttons (cta)/Button',
  component: ButtonComponent,
  argTypes: {
    type: {
      options: ['flat', 'stroked', 'link'],
      control: { type: 'radio' },
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

export const Link: Story = {
  args: {
    type: 'link',
    disabled: false,
  },
};

Link.storyName = 'Tertiary';

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
