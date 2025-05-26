import {Component, input, InputSignal, signal} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";


@Component({
  selector: 'mh-accordion',
  imports: [MatExpansionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly panelOpenState = signal(false);
}
