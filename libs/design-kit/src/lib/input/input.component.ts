import { ChangeDetectionStrategy, Component, effect, input, InputSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mh-input',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly myInputControl = new FormControl('', [Validators.required]);
  readonly myTextareaControl = new FormControl('', [Validators.required]);

  constructor() {
    effect(() => {
      if (this.disabled()) {
        this.myInputControl.disable();
        this.myTextareaControl.disable();
      } else {
        this.myInputControl.enable();
        this.myTextareaControl.enable();
      }
    });
  }
}
