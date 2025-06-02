import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mh-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly type: InputSignal<'basic' | 'raised' | 'stroked' | 'flat' | 'allVariants'> = input.required();
  readonly disabled: InputSignal<boolean> = input.required();
}
