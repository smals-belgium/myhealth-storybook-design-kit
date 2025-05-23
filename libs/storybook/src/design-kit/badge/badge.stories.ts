import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<BadgeComponent>;

export const Default: Story = {};
