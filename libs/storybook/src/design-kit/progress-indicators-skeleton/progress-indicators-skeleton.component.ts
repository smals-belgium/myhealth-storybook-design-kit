import {Component, input, InputSignal} from '@angular/core';
import {NgxSkeletonLoaderComponent} from "ngx-skeleton-loader";

@Component({
  selector: 'mh-progress-indicators-skeleton',
  imports: [NgxSkeletonLoaderComponent],
  templateUrl: './progress-indicators-skeleton.component.html',
  styleUrl: './progress-indicators-skeleton.component.scss',
})
export class ProgressIndicatorsSkeletonComponent {
  readonly items: InputSignal<number> = input(3);
}
