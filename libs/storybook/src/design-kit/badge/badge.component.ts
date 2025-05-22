import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'mh-badge',
  imports: [MatBadgeModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {}
