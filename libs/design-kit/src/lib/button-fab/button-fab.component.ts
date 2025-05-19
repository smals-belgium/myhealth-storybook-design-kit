import { Component, input, InputSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mh-button-fab',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-fab.component.html',
  styleUrl: './button-fab.component.scss',
})
export class ButtonFabComponent {
  readonly disabled: InputSignal<boolean> = input.required();
}
