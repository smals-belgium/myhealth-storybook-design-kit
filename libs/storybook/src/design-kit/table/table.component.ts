import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ChangeDetectionStrategy, Component, computed, input, InputSignal, ViewChild, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mh-table',
  standalone: true,
  imports: [
    NgxSkeletonLoaderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() isMobile = false;

  readonly expandEnabled: InputSignal<boolean> = input.required();
  readonly isLoading: InputSignal<boolean> = input.required();

  readonly pageSize: number = 10;
  readonly initialColumns = ['name', 'description', 'date'];
  searchValue = '';

  @ViewChild(MatSort) sort!: MatSort;

  readonly dataSource = computed(() => {
    const ds = new MatTableDataSource<unknown>([
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
    // The sort will be set after Angular initializes the MatSort
    setTimeout(() => {
      ds.sort = this.sort;
    });
    return ds;
  });

  expandedElement?: unknown;

  columns = computed(() => {
    return this.expandEnabled() ? [...this.initialColumns, 'expand'] : this.initialColumns;
  });

  search(searchValue?: string) {
    if (searchValue) this.searchValue = searchValue;

    this.dataSource().filter = this.searchValue.trim().toLowerCase();
  }
}
