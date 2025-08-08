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
    alertTitle: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

const defaultArgs = {
  alertTitle: 'This is an alert title',
  actionButton: true,
  buttonLabel: 'Button',
  buttonDisabled: false,
  closeButtonAriaLabel: 'Close alert',
  expandedButtonAriaLabel: 'Collapse alert',
  collapsedButtonAriaLabel: 'Expand alert',
};

const defaultRender = (args: any) => ({
  props: args,
  template: `
    <mh-alert
      [usage]="usage"
      [backgroundColor]="backgroundColor"
      [dismissMode]="dismissMode"
      [alertTitle]="alertTitle"
      [actionButton]="actionButton"
      [buttonLabel]="buttonLabel"
      [buttonDisabled]="buttonDisabled"
      [closeButtonAriaLabel]="closeButtonAriaLabel"
      [expandedButtonAriaLabel]="expandedButtonAriaLabel"
      [collapsedButtonAriaLabel]="collapsedButtonAriaLabel"
    >
      <div alert-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </mh-alert>
  `,
});

export const Info: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'closable',
    usage: 'info',
    backgroundColor: 'color',
  },
  render: defaultRender,
};

export const InfoWhiteBackground: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'closable',
    usage: 'info',
    backgroundColor: 'white',
  },
  render: defaultRender,
};

export const Error: Story = {
  args: {
    ...defaultArgs,
    usage: 'error',
    backgroundColor: 'color',
  },
  render: defaultRender,
};

export const ErrorWhiteBackground: Story = {
  args: {
    ...defaultArgs,
    usage: 'error',
    backgroundColor: 'white',
  },
  render: defaultRender,
};

export const Warning: Story = {
  args: {
    ...defaultArgs,
    usage: 'warning',
    backgroundColor: 'color',
  },
  render: defaultRender,
};

export const WarningWhiteBackground: Story = {
  args: {
    ...defaultArgs,
    usage: 'warning',
    backgroundColor: 'white',
  },
  render: defaultRender,
};
