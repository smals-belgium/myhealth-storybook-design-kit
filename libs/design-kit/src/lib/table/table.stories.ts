import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';

const meta: Meta<TableComponent> = {
  title: 'Components/Table',
  component: TableComponent,
  argTypes: {
    expandEnabled: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: {
    expandEnabled: true,
    isLoading: false,
  },
};
