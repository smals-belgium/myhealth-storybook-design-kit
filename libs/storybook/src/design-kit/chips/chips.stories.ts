import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { ChipsComponent } from './chips.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<ChipsComponent> = {
  title: 'Angular Components/Chips',
  component: ChipsComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<ChipsComponent>;

export const Default: Story = {};
