import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { ExpansionComponent } from './expansion.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<ExpansionComponent> = {
  title: 'Angular Components/Expansion',
  component: ExpansionComponent,
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

type Story = StoryObj<ExpansionComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
