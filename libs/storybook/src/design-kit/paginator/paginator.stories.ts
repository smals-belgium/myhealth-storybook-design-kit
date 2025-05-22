import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { PaginatorComponent } from './paginator.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<PaginatorComponent> = {
  title: 'Components/Paginator',
  component: PaginatorComponent,
  argTypes: {
    length: {
      control: { type: 'number' },
    },
    pageSize: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showFirstLastButtons: {
      control: { type: 'boolean' },
    },
    showPageSizeOptions: {
      control: { type: 'boolean' },
    },
    hidePageSize: {
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
type Story = StoryObj<PaginatorComponent>;

export const Default: Story = {
  args: {
    length: 100,
    pageSize: 10,
    disabled: false,
    showFirstLastButtons: true,
    showPageSizeOptions: true,
    hidePageSize: false,
  },
};
