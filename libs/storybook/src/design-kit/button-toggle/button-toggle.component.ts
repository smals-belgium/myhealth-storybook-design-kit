import { Component, input, InputSignal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'mh-button-toggle',
  imports: [MatButtonToggleModule],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
})
export class ButtonToggleComponent {
  readonly disabled: InputSignal<boolean> = input.required();
}
