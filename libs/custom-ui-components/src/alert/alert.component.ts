import { Component, input, computed, output, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'mh-alert',
  imports: [CommonModule, MatIcon, MatButton],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  usage = input<'info' | 'success' | 'warning' | 'error' | 'notification'>('info');
  backgroundColor = input<'white' | 'color'>('color');
  alertTitle = input<string>();
  alertSubtitle = input<string>();
  actionButton = input<boolean>(false);
  buttonDisabled = input<boolean>(false);
  buttonLabel = input<string>();
  dismissMode = input<'closable' | 'expandable' | 'pinned'>('pinned');
  closeButtonAriaLabel = input<string>('');
  startExpanded = input<boolean>(false);
  expandedButtonAriaLabel = input<string>('');
  collapsedButtonAriaLabel = input<string>('');

  closeButtonClicked = output<void>();
  actionButtonClicked = output<void>();

  expanded = linkedSignal(() => this.startExpanded());

  currentExpandIconAriaLabel = computed(() =>
    this.expanded() ? this.expandedButtonAriaLabel() : this.collapsedButtonAriaLabel()
  );

  readonly expandableExpanded = computed(() => this.dismissMode() === 'expandable' && this.expanded());

  readonly notExpandableMissingTitleAndSubtitle = computed(
    () => this.dismissMode() !== 'expandable' && (this.alertTitle() || this.alertSubtitle())
  );

  toggleExpanded = () => {
    this.expanded.update((v) => !v);
  };

  onActionButtonClicked = () => {
    this.actionButtonClicked.emit();
  };

  onCloseButtonClick() {
    this.closeButtonClicked.emit();
  }

  fontIcon = computed(() => {
    const icons = {
      info: 'info',
      success: 'check_circle',
      warning: 'warning',
      error: 'emergency_home',
      notification: 'notifications',
    };
    return icons[this.usage()] ?? 'info';
  });
}
