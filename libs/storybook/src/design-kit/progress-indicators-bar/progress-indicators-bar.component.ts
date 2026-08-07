import { Component, input, InputSignal, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'mh-progress-indicators-bar',
  imports: [MatProgressBarModule],
  templateUrl: './progress-indicators-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './progress-indicators-bar.component.scss',
})
export class ProgressIndicatorsBarComponent {
  readonly percentage: InputSignal<number> = input(40);
}
