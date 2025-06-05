import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { SnackbarComponent } from './snackbar.component';

const meta: Meta<SnackbarComponent> = {
  title: 'Angular Components/Snackbar',
  component: SnackbarComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<SnackbarComponent>;

export const Default: Story = {};
