import {Component, input, InputSignal} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'mh-progress-indicators-spinner',
  imports: [MatProgressSpinnerModule],
  templateUrl: './progress-indicators-spinner.component.html',
  styleUrl: './progress-indicators-spinner.component.scss',
})
export class ProgressIndicatorsSpinnerComponent {
  readonly percentage: InputSignal<number> = input(40);
}
