import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Angular Components/Card',
  component: CardComponent,
  argTypes: {
    appearance: {
      options: ['raised', 'outlined'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Outlined: Story = {
  args: {
    appearance: 'outlined',
  },
};

export const Raised: Story = {
  args: {
    appearance: 'raised',
  },
};
