import { Component, input, InputSignal, ChangeDetectionStrategy } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'mh-slide-toggle',
  imports: [MatSlideToggleModule],
  templateUrl: './slide-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './slide-toggle.component.scss',
})
export class SlideToggleComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly checked: InputSignal<boolean> = input.required();
}
