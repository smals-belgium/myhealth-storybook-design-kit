import {Component, ElementRef} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'mh-scroll-to',
  templateUrl: './scroll-to.component.html',
  styleUrl: './scroll-to.component.scss',
  imports: [
    MatButtonModule
  ]
})
export class ScrollToComponent {
  scrollTo(target: HTMLElement | ElementRef): void {
    const el = target instanceof ElementRef ? target.nativeElement : target;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
