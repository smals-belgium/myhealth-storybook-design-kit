import { Component, input, InputSignal, ChangeDetectionStrategy } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'mh-tab',
  imports: [MatTabsModule],
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  readonly thirdTabDisabled: InputSignal<boolean> = input.required();
}
