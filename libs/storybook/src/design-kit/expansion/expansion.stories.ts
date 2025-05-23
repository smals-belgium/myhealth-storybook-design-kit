import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ExpansionComponent } from './expansion.component';

const meta: Meta<ExpansionComponent> = {
  title: 'Components/Expansion',
  component: ExpansionComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<ExpansionComponent>;

export const Default: Story = {};
