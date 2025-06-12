import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoadOnScrollComponent } from './load-on-scroll';

const meta: Meta<LoadOnScrollComponent> = {
  title: 'Animations/Load on Scroll',
  component: LoadOnScrollComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<LoadOnScrollComponent>;

export const Default: Story = {};
