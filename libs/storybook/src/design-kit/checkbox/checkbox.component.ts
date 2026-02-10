import { Component, computed, effect, input, InputSignal, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'mh-checkbox',
  imports: [MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  readonly disabled: InputSignal<boolean> = input.required();
  readonly checked: InputSignal<boolean> = input.required();
  readonly showGroup = input<boolean>(false);

  readonly task = signal<Task>({
    name: 'Parent task',
    completed: false,
    subtasks: [
      { name: 'Child task 1', completed: false },
      { name: 'Child task 2', completed: false },
      { name: 'Child task 3', completed: false },
    ],
  });

  readonly partiallyComplete = computed(() => {
    const task = this.task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some((t) => t.completed) && !task.subtasks.every((t) => t.completed);
  });

  update(completed: boolean, index?: number) {
    this.task.update((task) => {
      if (index === undefined) {
        task.completed = completed;
        task.subtasks?.forEach((t) => (t.completed = completed));
      } else {
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every((t) => t.completed) ?? true;
      }
      return { ...task };
    });
  }

  constructor() {
    effect(() => {
      const checked = this.checked();
      this.task.update((task) => {
        task.completed = checked;
        task.subtasks?.forEach((t) => (t.completed = checked));
        return { ...task };
      });
    });
  }
}
