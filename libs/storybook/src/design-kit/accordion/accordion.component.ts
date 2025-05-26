import {Component, Input, signal} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";


@Component({
  selector: 'mh-accordion',
  imports: [MatExpansionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() disabled: boolean = false;
  readonly panelOpenState = signal(false);
}
