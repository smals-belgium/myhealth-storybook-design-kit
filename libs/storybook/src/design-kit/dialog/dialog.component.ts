import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mh-dialog-wrapper',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog-wrapper.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogWrapperComponent {
  private readonly dialog: MatDialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      panelClass: 'mh-dialog-container',
    });
  }
}

@Component({
  selector: 'mh-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {}
