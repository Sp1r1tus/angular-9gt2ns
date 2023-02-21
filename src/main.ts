import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <h1>Hello from {{name}}!</h1>
   <button (click)="openDialog()">open modal</button>
  `,
})
export class App {
  constructor(private dialogService: MatDialog) {}
  name = 'Angular';
  openDialog() {
    const dialogRef = this.dialogService.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      alert('close');
    });
  }
}

bootstrapApplication(App);
