import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<AutocompleteComponent> = {
  title: 'Components/Form field/Autocomplete',
  component: AutocompleteComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<AutocompleteComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
