import { Component, effect, input, InputSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'mh-select',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly multiple: InputSignal<boolean> = input.required();

  readonly mySelectControl = new FormControl('', [Validators.required]);
  readonly options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];

  constructor() {
    effect(() => {
      if (this.disabled()) {
        this.mySelectControl.disable();
      } else {
        this.mySelectControl.enable();
      }
    });
  }
}
