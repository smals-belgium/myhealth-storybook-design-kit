import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { ProgressIndicatorsBarComponent } from './progress-indicators-bar.component';

const meta: Meta<ProgressIndicatorsBarComponent> = {
  title: 'Angular Components/Progress Indicators/Bar',
  component: ProgressIndicatorsBarComponent,
  argTypes: {
    percentage: {
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
type Story = StoryObj<ProgressIndicatorsBarComponent>;

export const Bar: Story = {
  args: {
    percentage: 40
  }
};
