import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'mh-snackbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  private readonly snackbar: MatSnackBar = inject(MatSnackBar);

  openSuccessSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      panelClass: ['mh-snackbar--success'],
      duration: 5000,
    });
  }
}
