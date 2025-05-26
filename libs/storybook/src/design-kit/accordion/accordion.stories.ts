import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
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

type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
