import { Component, input, InputSignal } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'mh-radio-button',
  imports: [MatRadioModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly items: InputSignal<number> = input.required();
  readonly layout: InputSignal<'vertical' | 'horizontal'> = input.required();
  readonly selectedItem: InputSignal<number | undefined> = input<number | undefined>(undefined);

  protected readonly Array = Array;
}
