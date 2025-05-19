import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Form field/Input',
  component: InputComponent,
  argTypes: {
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
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
