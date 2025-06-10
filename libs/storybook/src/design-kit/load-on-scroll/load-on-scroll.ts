import { Component } from '@angular/core';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

@Component({
  selector: 'mh-load-on-scroll',
  templateUrl: './load-on-scroll.html',
  styleUrl: './load-on-scroll.scss',
  imports: [NgxSkeletonLoaderComponent],
})
export class LoadOnScrollComponent {
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  loading = false;

  onScroll(event: any) {
    const element = event.target;
    if (element.scrollTop + element.clientHeight >= element.scrollHeight - 20) {
      this.loadMore();
    }
  }

  loadMore() {
    if (this.loading) return;

    this.loading = true;
    setTimeout(() => {
      const start = this.items.length + 1;
      for (let i = start; i < start + 5; i++) {
        this.items.push(i);
      }
      this.loading = false;
    }, 750);
  }
}
