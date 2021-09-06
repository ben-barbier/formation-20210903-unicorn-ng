import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unicorn } from '../../../../shared/models/unicorn.model';

@Component({
  selector: 'app-unicorn-edit',
  templateUrl: './unicorn-edit.component.html',
  styleUrls: ['./unicorn-edit.component.scss'],
})
export class UnicornEditComponent {
  public unicorn = this.data.unicorn;

  public updateForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { unicorn: Unicorn },
    public dialogRef: MatDialogRef<UnicornEditComponent>,
    private fb: FormBuilder
  ) {
    this.updateForm = fb.group({
      name: [this.unicorn.name, [Validators.required]],
      birthyear: [this.unicorn.birthyear, [Validators.required]],
    });
  }

  public save(updatedUnicornFields: Partial<Unicorn>): void {
    this.dialogRef.close({ ...this.unicorn, ...updatedUnicornFields });
  }
}
