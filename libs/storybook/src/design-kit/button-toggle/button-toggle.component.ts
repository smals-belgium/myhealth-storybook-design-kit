import { Component, effect, input, InputSignal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'mh-button-toggle',
  imports: [
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatError,
    MatIcon,
    MatSuffix,
    MatFormField,
    MatLabel,
    MatButton,
  ],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
})
export class ButtonToggleComponent {
  readonly view = input<'default' | 'error'>('default');
  readonly disabled: InputSignal<boolean> = input.required();
  readonly fontStyleControl = new FormControl(
    { value: undefined, disabled: false },
    { validators: [Validators.required] }
  );

  constructor() {
    this.fontStyleControl.markAsTouched();

    effect(() => {
      if (this.disabled()) {
        this.fontStyleControl.disable();
      } else {
        this.fontStyleControl.enable();
      }
    });
  }
}
