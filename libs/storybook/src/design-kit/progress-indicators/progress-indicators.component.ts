import {Component, input, InputSignal} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgxSkeletonLoaderComponent} from "ngx-skeleton-loader";

@Component({
  selector: 'mh-progress-indicators',
  imports: [MatProgressBarModule, MatProgressSpinnerModule, NgxSkeletonLoaderComponent],
  templateUrl: './progress-indicators.component.html',
  styleUrl: './progress-indicators.component.scss',
})
export class ProgressIndicatorsComponent {
  readonly type: InputSignal<'bar' | 'spinner' | 'skeleton'> = input.required();
  readonly percentage: InputSignal<number> = input(40);
  readonly items: InputSignal<number> = input(3);
}
