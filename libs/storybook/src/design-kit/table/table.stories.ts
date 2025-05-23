import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { provideAnimations } from '@angular/platform-browser/animations';

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
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: {
    expandEnabled: true,
    isLoading: false,
  },
};
