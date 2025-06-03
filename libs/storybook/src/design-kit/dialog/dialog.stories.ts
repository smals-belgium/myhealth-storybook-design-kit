import type { Meta, StoryObj } from '@storybook/angular';
import { DialogWrapperComponent } from './dialog.component';

const meta: Meta<DialogWrapperComponent> = {
  title: 'Angular Components/Dialog',
  component: DialogWrapperComponent,
};

export default meta;
type Story = StoryObj<DialogWrapperComponent>;

export const Default: Story = {};
