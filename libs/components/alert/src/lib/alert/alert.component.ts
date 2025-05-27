import { Component, input, computed, output } from '@angular/core';
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
  readonly usage = input<'info' | 'success' | 'warning' | 'error' | 'notification'>("info");
  readonly backgroundColor = input<'white' | 'color'>("color");
  title = input.required<string>();
  readonly details = input<string>();
  readonly closeButton = input<boolean>(false);
  readonly actionButton = input<boolean>(false);
  readonly buttonDisabled = input<boolean>(false);
  readonly buttonLoading = input<boolean>(false);
  readonly buttonLabel = input<string>();
  readonly buttonLoadingLabel = input<string>("");
  readonly closeButtonAriaLabel = input<string>("");

  closeAlert  = output<void>()
  buttonClicked = output<void>()

  fontIcon = computed(() => {
    switch (this.usage()) {
      case 'info': return 'info';
      case 'success': return 'check_circle';
      case 'warning': return 'warning';
      case 'error': return 'emergency_home';
      case 'notification': return 'notifications';
      default: return 'info';
    }
  });

  onButtonClicked = () => {
    this.buttonClicked.emit();
  }

  onCloseClick() {
    this.closeAlert.emit();
  }

  onCloseKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.closeAlert.emit();
    }
  }
}
