import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(protected dialogRef: MatDialogRef<DialogComponent>) {
    console.log('open');
  }

  ok() {
    console.log('close');
    this.dialogRef.close();
  }
}
