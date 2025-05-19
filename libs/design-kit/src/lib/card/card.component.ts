import { MatCardModule } from '@angular/material/card';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mh-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly appearance: InputSignal<'raised' | 'outlined'> = input.required();
}
