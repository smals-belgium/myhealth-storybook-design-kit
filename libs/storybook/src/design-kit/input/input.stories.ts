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
    maxLength: {
      control: { type: 'number' },
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
    maxLength: 200,
  },
};

export const Textarea: Story = {
  args: {
    disabled: false,
    maxLength: 200,
    view: 'textarea',
  },
};

export const Icons: Story = {
  args: {
    disabled: false,
    maxLength: 200,
    view: 'icons',
  },
};

export const Error: Story = {
  args: {
    disabled: false,
    maxLength: 200,
    view: 'error',
  },
};
