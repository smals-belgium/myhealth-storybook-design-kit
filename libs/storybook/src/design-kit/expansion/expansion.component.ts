import {Component, input, InputSignal, signal} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";


@Component({
  selector: 'mh-expansion',
  imports: [MatExpansionModule],
  templateUrl: './expansion.component.html',
  styleUrl: './expansion.component.scss',
})
export class ExpansionComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly panelOpenState = signal(false);
}
