import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ObjNbr {
  id: number;
  enabled: boolean;
}

@Component({
  selector: 'app-mat-alert',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  myForm: FormGroup;

  numbersArr: ObjNbr[] = [
    { id: 1, enabled: false },
    { id: 2, enabled: true },
    { id: 3, enabled: true },
    { id: 4, enabled: false },
    { id: 5, enabled: false },
  ];

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      numbers: [{ value: '' }],
    });
  }

  closeAlert() {
    this.dialogRef.close();
  }
}
