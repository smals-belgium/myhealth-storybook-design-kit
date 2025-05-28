import { Component, input, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'mh-alert',
  imports: [CommonModule, MatIcon, MatButton, MatIconButton],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  usage = input<'info' | 'success' | 'warning' | 'error' | 'notification'>('info');
  backgroundColor = input<'white' | 'color'>('color');
  title = input.required<string>();
  details = input<string>();
  actionButton = input<boolean>(false);
  buttonDisabled = input<boolean>(false);
  buttonLabel = input<string>();
  closeButton = input<boolean>(false);
  closeButtonAriaLabel = input<string>('');

  closeAlert = output<void>();
  buttonClicked = output<void>();

  fontIcon = computed(() => {
    switch (this.usage()) {
      case 'info':
        return 'info';
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'warning';
      case 'error':
        return 'emergency_home';
      case 'notification':
        return 'notifications';
      default:
        return 'info';
    }
  });

  onButtonClicked = () => {
    this.buttonClicked.emit();
  };

  onCloseClick() {
    this.closeAlert.emit();
  }
}
