import { type Meta, type StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'myh_internal/Alert',
  tags: ['hideInSidebar'],
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
    dismissMode: {
      control: { type: 'radio' },
      options: ['closable', 'expandable', 'pinned'],
    },
    actionButton: { control: 'boolean' },
    buttonDisabled: { control: 'boolean' },
    buttonLabel: { control: 'text' },
    closeButtonAriaLabel: { control: 'text' },
    expandedButtonAriaLabel: { control: 'text' },
    collapsedButtonAriaLabel: { control: 'text' },
    title: { control: 'text' },
    details: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

const defaultArgs = {
  title: 'This is a title',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  actionButton: true,
  buttonLabel: 'Button',
  buttonDisabled: false,
  closeButtonAriaLabel: 'Close alert',
  expandedButtonAriaLabel: 'Collapse alert',
  collapsedButtonAriaLabel: 'Expand alert',
};

export const Info: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'closable',
    usage: 'info',
    backgroundColor: 'color',
  },
};

export const InfoWhiteBackground: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'closable',
    usage: 'info',
    backgroundColor: 'white',
  },
};

export const Error: Story = {
  args: {
    ...defaultArgs,
    usage: 'error',
    backgroundColor: 'color',
  },
};

export const ErrorWhiteBackground: Story = {
  args: {
    ...defaultArgs,
    usage: 'error',
    backgroundColor: 'white',
  },
};

export const Warning: Story = {
  args: {
    ...defaultArgs,
    usage: 'warning',
    backgroundColor: 'color',
  },
};

export const WarningWhiteBackground: Story = {
  args: {
    ...defaultArgs,
    usage: 'warning',
    backgroundColor: 'white',
  },
};
