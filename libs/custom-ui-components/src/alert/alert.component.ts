import { Component, input, computed, output, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'mh-alert',
  standalone: true,
  imports: [CommonModule, MatIcon, MatButton],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  usage = input<'info' | 'success' | 'warning' | 'error' | 'notification'>('info');
  backgroundColor = input<'white' | 'color'>('color');
  title = input.required<string>();
  details = input<string>();
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

  expanded = signal(true);

  ngOnInit() {
    this.expanded.set(this.startExpanded());
  }

  currentExpandIconAriaLabel = computed(() =>
    this.expanded() ? this.expandedButtonAriaLabel() : this.collapsedButtonAriaLabel()
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
