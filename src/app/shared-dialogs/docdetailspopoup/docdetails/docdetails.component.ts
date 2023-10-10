import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-docdetails',
  templateUrl: './docdetails.component.html',
  styleUrls: ['./docdetails.component.scss'],
})
export class DocdetailsComponent {
  selectedFile: File | undefined;
  base64String: string | undefined;
  form!: FormGroup;
  selectedValue: any;
  FieldLables: any;
  formstemp: any;
  body: any;
  details: any;
  dropdownval = ['IBM Signer', 'Oracle Signer', 'SAP Signer'];
  @ViewChild('fileInput') fileInput!: ElementRef;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DocdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      items: this.fb.array([]),

      file: [null], // Initialize an empty FormArray
    });
  }
  types: string = '';
  name: any;
  files: any;
  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([]),
      file: [null], // Initialize an empty FormArray
    });
    console.log(this.data);
    this.FieldLables = this.data;
    this.itemsFormArray.clear();

    if (this.FieldLables.length > 0) {
      this.FieldLables.forEach((element: any) => {
        console.log(element);
        this.addItem({
          name: element.name,
          Label: element.Label,
        });
      });
    } else {
    }
  }

  get itemsFormArray() {
    return this.form.controls['items'] as FormArray;
  }

  addItem(data?: { name: string; Label: string })
   {
    const item = this.fb.group({
      name: [data ? data.name : '', Validators.required],
      Label: [data ? data.Label : ''],
      // Description: [data ? data.Description : '', Validators.required]
      // Add more form controls as needed
    });

    this.itemsFormArray.push(item);
    console.log(this.itemsFormArray.value);

    // console.log(this.service.certificates[this.clickedIndex].Fields)
  }

  FinalForm() {
    console.log(this.form);
    console.log('form value');
  }
  ok()
  {
    this.dialogRef.close();
  }
}
