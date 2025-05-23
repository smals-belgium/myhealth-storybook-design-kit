import { Component, computed, effect, input, InputSignal, signal, Signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mh-autocomplete',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule, MatIconModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly myControl = new FormControl('', [Validators.required]);
  readonly options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];

  readonly isOpen: WritableSignal<boolean> = signal(false);
  readonly suffixIcon: Signal<string> = computed(() => (this.isOpen() ? 'keyboard_arrow_up' : 'keyboard_arrow_down'));

  readonly filteredOptions: WritableSignal<string[]> = signal(this.options);

  constructor() {
    effect(() => {
      if (this.disabled()) {
        this.myControl.disable();
      } else {
        this.myControl.enable();
      }
      this.myControl.valueChanges.subscribe((value) => {
        this.filteredOptions.set(this.filter(value || ''));
      });
    });

    effect(() => {
      if (this.disabled()) {
        this.myControl.disable();
      } else {
        this.myControl.enable();
      }
    });
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }

  resetOptions(): void {
    this.filteredOptions.set(this.options);
  }
}
