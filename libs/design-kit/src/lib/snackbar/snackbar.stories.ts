import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SnackbarComponent } from './snackbar.component';

const meta: Meta<SnackbarComponent> = {
  title: 'Components/Snackbar',
  component: SnackbarComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SnackbarComponent>;

export const Default: Story = {};
