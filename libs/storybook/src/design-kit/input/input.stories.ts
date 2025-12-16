import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Angular Components/Form field/Input',
  component: InputComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    view: {
      table: { disable: true },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};

export const Icons: Story = {
  args: {
    disabled: false,
    view: 'icons',
  },
};

export const Error: Story = {
  args: {
    disabled: false,
    view: 'error',
  },
};
