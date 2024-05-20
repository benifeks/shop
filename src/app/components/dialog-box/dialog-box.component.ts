import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data) this.isNew = false;
  }

  public myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? null),
    price: new FormControl(this.data?.price ?? null),
    year: new FormControl(this.data?.year ?? null),
    chip: new FormControl(this.data?.chip ?? null),
    ssd: new FormControl(this.data?.ssd ?? null),
    memory: new FormControl(this.data?.memory ?? null),
    display: new FormControl(this.data?.display ?? null),
  });

  public isNew: boolean = true;

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.data = {
      id: this.myForm.value.id,
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      image: 'assets/images/macbooks/macbook2.jpg',
      year: this.myForm.value.year,
      configure: {
        chip: this.myForm.value.chip,
        SSD: this.myForm.value.SSD,
        memory: this.myForm.value.memory,
        display: this.myForm.value.display,
      },
    };
    this.dialogRef.close(this.data);
  }
}
