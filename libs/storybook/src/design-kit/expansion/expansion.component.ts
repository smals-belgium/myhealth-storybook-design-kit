import { MatExpansionModule } from '@angular/material/expansion';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mh-expansion',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './expansion.component.html',
  styleUrl: './expansion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionComponent {
  panelOpenState = false;
}
