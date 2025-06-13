import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Angular Components/Card',
  component: CardComponent,
  argTypes: {
    labelled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Not_Labelled: Story = {
  args: {
    labelled: false,
  },
};

export const Labelled: Story = {
  args: {
    labelled: true,
  },
};
