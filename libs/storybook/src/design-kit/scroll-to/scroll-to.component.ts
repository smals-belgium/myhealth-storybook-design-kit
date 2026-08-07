import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mh-scroll-to',
  templateUrl: './scroll-to.component.html',
  styleUrl: './scroll-to.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule],
})
export class ScrollToComponent {
  behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  scrollTo(target: HTMLElement | ElementRef): void {
    const el = target instanceof ElementRef ? target.nativeElement : target;
    el.scrollIntoView({ behavior: this.behavior, block: 'start' });
  }
}
