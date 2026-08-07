import { Component, input, InputSignal, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'mh-progress-indicators-spinner',
  imports: [MatProgressSpinnerModule],
  templateUrl: './progress-indicators-spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './progress-indicators-spinner.component.scss',
})
export class ProgressIndicatorsSpinnerComponent {
  readonly percentage: InputSignal<number> = input(40);
}
