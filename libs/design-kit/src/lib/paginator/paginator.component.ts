import { Component, input, InputSignal } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'mh-paginator',
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  readonly length: InputSignal<number> = input.required();
  readonly pageSize: InputSignal<number> = input.required();
  readonly disabled: InputSignal<boolean> = input.required();
  readonly showFirstLastButtons: InputSignal<boolean> = input.required();
  readonly showPageSizeOptions: InputSignal<boolean> = input.required();
  readonly hidePageSize: InputSignal<boolean> = input.required();

  readonly pageSizeOptions = [5, 10, 25, 100];
}
