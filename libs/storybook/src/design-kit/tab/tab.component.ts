import {Component, input, InputSignal} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";


@Component({
  selector: 'mh-tab',
  imports: [MatTabsModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  readonly disabled: InputSignal<boolean> = input.required();
}
