import { MatCardModule } from '@angular/material/card';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'mh-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatCheckbox, MatChip],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly labelled: InputSignal<boolean> = input(true);
  readonly appearanceCard: InputSignal<boolean> = input(true);
  readonly appearance: InputSignal<'raised' | 'outlined'> = input.required();
}
