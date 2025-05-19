import { ChangeDetectionStrategy, Component, effect, input, InputSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mh-datepicker',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly myControl = new FormControl('', [Validators.required]);

  constructor() {
    effect(() => {
      this.disabled() ? this.myControl.disable() : this.myControl.enable();
    });
  }
}
