import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { ProgressIndicatorsComponent } from './progress-indicators.component';

const meta: Meta<ProgressIndicatorsComponent> = {
  title: 'Components/Progress Indicators',
  component: ProgressIndicatorsComponent,
  argTypes: {
    type: {
      options: ['bar', 'spinner', 'skeleton'],
      control: { type: 'radio' },
    },
    percentage: {
      control: { type: 'number' },
    },
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
type Story = StoryObj<ProgressIndicatorsComponent>;

export const Bar: Story = {
  args: {
    type: 'bar',
    percentage: 40
  },
};

export const Spinner: Story = {
  args: {
    type: 'spinner',
    percentage: 40
  },
};

export const Skeleton: Story = {
  args: {
    type: 'skeleton',
    items: 3
  },
};
