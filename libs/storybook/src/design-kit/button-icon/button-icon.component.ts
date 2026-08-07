import { Component, input, InputSignal, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mh-button-icon',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './button-icon.component.scss',
})
export class ButtonIconComponent {
  readonly disabled: InputSignal<boolean> = input.required();
}
