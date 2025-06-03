import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { ProgressIndicatorsSkeletonComponent } from './progress-indicators-skeleton.component';

const meta: Meta<ProgressIndicatorsSkeletonComponent> = {
  title: 'Components/Progress Indicators/Skeleton',
  component: ProgressIndicatorsSkeletonComponent,
  argTypes: {
    items: {
      control: { type: 'number' },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<ProgressIndicatorsSkeletonComponent>;

export const Skeleton: Story = {
  args: {
    items: 3
  }
};
