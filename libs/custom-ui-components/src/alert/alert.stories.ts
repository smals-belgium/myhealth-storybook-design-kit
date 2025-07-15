import { type Meta, type StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { input } from '@angular/core';

const meta: Meta<AlertComponent> = {
  title: 'Additional UI Components/Alert',
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
    startExpanded: { control: 'boolean' },
    actionButton: { control: 'boolean' },
    buttonDisabled: { control: 'boolean' },
    buttonLabel: { control: 'text' },
    closeButtonAriaLabel: { control: 'text' },
    expandedButtonAriaLabel: { control: 'text' },
    collapsedButtonAriaLabel: { control: 'text' },
    alertTitle: { control: 'text' },
    details: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<AlertComponent>;

const defaultArgs = {
  alertTitle: 'This is a alertTitle',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  actionButton: true,
  buttonLabel: 'Button',
  buttonDisabled: false,
  closeButtonAriaLabel: 'Close alert',
  expandedButtonAriaLabel: 'Collapse alert',
  collapsedButtonAriaLabel: 'Expand alert',
};

export const PinnedDefault: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'pinned',
    usage: 'info',
    backgroundColor: 'color',
  },
};

export const PinnedWhiteBackground: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'pinned',
    usage: 'info',
    backgroundColor: 'white',
  },
};

export const Expandable: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'expandable',
    usage: 'info',
    backgroundColor: 'color',
    startExpanded: false,
  },
};

export const Closable: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'closable',
    usage: 'info',
    backgroundColor: 'color',
  },
};
