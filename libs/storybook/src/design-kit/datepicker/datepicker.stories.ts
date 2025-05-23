import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { DatepickerComponent } from './datepicker.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

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
      providers: [provideAnimations(), { provide: MAT_DATE_LOCALE, useValue: 'nl-BE' }],
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
