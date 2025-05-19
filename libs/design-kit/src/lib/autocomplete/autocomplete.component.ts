import { Component, computed, effect, input, InputSignal, signal, Signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { map } from 'rxjs';

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

  readonly filteredOptions: Signal<string[]> = toSignal(
    this.myControl.valueChanges.pipe(map((value) => this.#filter(value || ''))),
    { initialValue: this.options }
  );

  constructor() {
    effect(() => {
      this.disabled() ? this.myControl.disable() : this.myControl.enable();
    });
  }

  #filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }
}
