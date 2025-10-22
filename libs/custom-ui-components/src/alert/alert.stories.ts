import { type Meta, type StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<AlertComponent> = {
  title: 'Additional UI Components/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
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
  },
};

export default meta;

type Story = StoryObj<AlertComponent>;

const defaultArgs = {
  alertTitle: 'This is an alert title',
  alertSubtitle: 'This is an alert subtitle',
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
  render: (args) => ({
    props: args,
    template: `
      <mh-alert
        [usage]="usage"
        [backgroundColor]="backgroundColor"
        [dismissMode]="dismissMode"
        [alertTitle]="alertTitle"
        [alertSubtitle]="alertSubtitle"
        [actionButton]="actionButton"
        [buttonLabel]="buttonLabel"
        [buttonDisabled]="buttonDisabled"
        [closeButtonAriaLabel]="closeButtonAriaLabel"
        [expandedButtonAriaLabel]="expandedButtonAriaLabel"
        [collapsedButtonAriaLabel]="collapsedButtonAriaLabel"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </mh-alert>
    `,
  }),
};

export const PinnedWhiteBackground: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'pinned',
    usage: 'info',
    backgroundColor: 'white',
  },
  render: PinnedDefault.render,
};

export const Expandable: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'expandable',
    usage: 'info',
    backgroundColor: 'color',
    startExpanded: false,
  },
  render: PinnedDefault.render,
};

export const Closable: Story = {
  args: {
    ...defaultArgs,
    dismissMode: 'closable',
    usage: 'info',
    backgroundColor: 'color',
  },
  render: PinnedDefault.render,
};
