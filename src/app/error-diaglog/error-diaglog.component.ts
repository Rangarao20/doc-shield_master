import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-diaglog',
  templateUrl: './error-diaglog.component.html',
  styleUrls: ['./error-diaglog.component.scss']
})
export class ErrorDiaglogComponent {
  errorMessage: string; // Define the errorMessage property

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { errorMessage: string },
    private dialogRef: MatDialogRef<ErrorDiaglogComponent>
  ) {
    // Assign the error message from the data object to errorMessage
    this.errorMessage = data.errorMessage;
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}

