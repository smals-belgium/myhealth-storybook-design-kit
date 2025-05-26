import {Component, Input} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";


@Component({
  selector: 'mh-accordion',
  imports: [MatTabsModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  @Input() disabled: boolean = false;
}
