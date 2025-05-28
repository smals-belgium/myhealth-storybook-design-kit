import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';

const meta: Meta<SelectComponent> = {
  title: 'Angular Components/Form field/Select',
  component: SelectComponent,
  argTypes: {
    multiple: {
      control: { type: 'boolean', disable: true },
    },
    disabled: {
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

type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    multiple: false,
    disabled: false,
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    disabled: false,
  },
};
