import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unicorn } from '../../../../shared/models/unicorn.model';

@Component({
  selector: 'app-unicorn-edit',
  templateUrl: './unicorn-edit.component.html',
  styleUrls: ['./unicorn-edit.component.scss'],
})
export class UnicornEditComponent {
  public unicorn = this.data.unicorn;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: { unicorn: Unicorn },
    public readonly dialogRef: MatDialogRef<UnicornEditComponent>
  ) {}

  public save(): void {
    // TODO: !
    const updatedUnicorn = null;
    this.dialogRef.close(updatedUnicorn);
  }
}
