import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Angular Components/Card',
  component: CardComponent,
  argTypes: {
    labelled: {
      control: { type: 'boolean' },
    },
    appearanceCard: {
      control: { type: 'boolean' },
    },
    appearance: {
      options: ['raised', 'outlined'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Not_Labelled: Story = {
  args: {
    labelled: false,
    appearanceCard: false,
  },
};

export const Labelled: Story = {
  args: {
    labelled: true,
    appearanceCard: false,
  },
};

export const Outlined: Story = {
  args: {
    appearanceCard: true,
    appearance: 'outlined',
  },
};

export const Raised: Story = {
  args: {
    appearanceCard: true,
    appearance: 'raised',
  },
};
