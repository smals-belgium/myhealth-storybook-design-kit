import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ChangeDetectionStrategy, Component, computed, input, InputSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'mh-table',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  readonly expandEnabled: InputSignal<boolean> = input.required();
  readonly isLoading: InputSignal<boolean> = input.required();

  readonly pageSize: number = 10;
  readonly initialColumns = ['name', 'description', 'date'];

  dataSource: MatTableDataSource<unknown> = new MatTableDataSource<unknown>([
    {
      name: 'Healthy food',
      description: "It's important to eat good food!",
      date: '04/01/2024',
    },
    {
      name: 'Healthy sports',
      description: 'Keeping up with sports will make sure you stay fit.',
      date: '22/04/2022',
    },
    {
      name: 'Healthy life',
      description: 'Make sure to stay healthy!',
      date: '01/01/2000',
    },
    {
      name: 'Healthy things',
      description: 'An apple a day keeps the doctors away ...',
      date: '19/12/2006',
    },
  ]);

  expandedElement?: unknown;

  columns = computed(() => {
    return this.expandEnabled() ? [...this.initialColumns, 'expand'] : this.initialColumns;
  });
}
