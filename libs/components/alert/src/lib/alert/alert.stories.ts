import { type Meta, type StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Custom Components/Alert',
  component: AlertComponent,
  argTypes: {
    usage: {
      control: { type: 'radio' },
      options: ['info', 'success', 'warning', 'error', 'notification'],
    },
    backgroundColor: {
      control: { type: 'radio' },
      options: ['white', 'color'],
    },
    closeButton: { control: 'boolean' },
    actionButton: { control: 'boolean' },
    buttonDisabled: { control: 'boolean' },
    buttonLoading: { control: 'boolean' },
    buttonLabel: { control: 'text' },
    buttonLoadingLabel: { control: 'text' },
    closeButtonAriaLabel: { control: 'text' },
    title: { control: 'text' },
    details: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<AlertComponent>;

const defaultArgs = {
  title: 'This is a title',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  closeButton: true,
  actionButton: true,
  buttonLabel: 'Button',
  buttonLoadingLabel: 'Loading',
  buttonDisabled: false,
  buttonLoading: false,
  closeButtonAriaLabel: 'Close alert',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    usage: 'info',
    backgroundColor: 'color',
  },
};

export const WhiteBackground: Story = {
  args: {
    ...defaultArgs,
    usage: 'info',
    backgroundColor: 'white',
  },
};
