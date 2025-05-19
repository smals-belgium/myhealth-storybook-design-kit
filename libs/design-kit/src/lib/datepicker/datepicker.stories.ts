import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { DatepickerComponent } from './datepicker.component';

const meta: Meta<DatepickerComponent> = {
  title: 'Components/Form field/Datepicker',
  component: DatepickerComponent,
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
type Story = StoryObj<DatepickerComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
