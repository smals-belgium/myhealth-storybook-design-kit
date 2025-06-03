import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { ProgressIndicatorsSpinnerComponent } from './progress-indicators-spinner.component';

const meta: Meta<ProgressIndicatorsSpinnerComponent> = {
  title: 'Components/Progress Indicators/Spinner',
  component: ProgressIndicatorsSpinnerComponent,
  argTypes: {
    percentage: {
      control: { type: 'number' },
    }
  },
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<ProgressIndicatorsSpinnerComponent>;

export const Spinner: Story = {
  args: {
    percentage: 40
  }
};
