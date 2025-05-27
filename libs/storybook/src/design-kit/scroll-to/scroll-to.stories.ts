import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import {ScrollToComponent} from "./scroll-to.component";

const meta: Meta<ScrollToComponent> = {
  title: 'Components/Scroll to',
  component: ScrollToComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<ScrollToComponent>;

export const Default: Story = {};
