import {
  AppearanceAnimation,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  ToastNotificationInitializer,
  ToastProgressBarEnum,
  ToastUserViewTypeEnum,
} from '@costlydeveloper/ngx-awesome-popup';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BackendService } from 'src/app/Services/backend.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-docissuepopup',
  templateUrl: './docissuepopup.component.html',
  styleUrls: ['./docissuepopup.component.scss'],
})
export class DocissuepopupComponent {
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
    public dialogRef: MatDialogRef<DocissuepopupComponent>,
    private service: BackendService,
    private data: DataService // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      items: this.fb.array([]),

      file: [null], // Initialize an empty FormArray
    });
  }
  types: string = '';
  name: any;
  files: any;
  documenttypes: any = [this.service.certificates];
  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([]),
      file: [null], // Initialize an empty FormArray
    });

    let url = 'http://localhost:5000/doctype';
    this.data.certificate(url).subscribe((data) => {
      console.log(data);
      this.formstemp = data;
    });
  }

  selecteditem(index: number)
  {
    console.log(index);
    this.name = this.formstemp[index].certificate_name;
    console.log(this.formstemp[index].jsonb_data.Fields);
    this.FieldLables = this.formstemp[index].jsonb_data.Fields;
    this.itemsFormArray.clear();

    if (this.FieldLables.length > 0) {
      this.FieldLables.forEach((element: any) => {
        console.log(element);
        this.addItem({
          name: '',
          Label: element.name,
        });
      });
    } else {
    }
  }

  get itemsFormArray()
  {
    return this.form.controls['items'] as FormArray;
  }

  addItem(data?: { name: string; Label: string }) {
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

  onFileSelected(event: any)
   {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();

    if (this.selectedFile)
    {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.base64String = e.target?.result as string;
      };
        reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit()
  {
    console.log(this.form.value);
    console.log(this.form.value.items[0].name);
    const jsond = JSON.stringify(this.form.value.items);
    console.log(this.files);
    const raw = {
      Issuer: 'IBM Issuer',
      Signer: 'Ashwin',
      Status: 1,
      receiver_id: 'Rangarao',
      receiver_mail_id: 'bharani@aramco.com',
      name: this.name,
      jsonb: jsond,
      file: this.base64String,
    };

    this.data.savedoc(raw).subscribe((results) => {
      console.log(results);
      if (results === 'Data Submitted Successfully') {
        const res = 'Document Issued Successfully ';
        this.toastNotification(res);
        this.dialogRef.close();
      }
    });

    const fileValue = this.form.get('file')?.value;
    if (fileValue) {
      const formData = new FormData();
      formData.append('file', fileValue);
      // Perform the HTTP POST request to upload the file here
      // After a successful upload, reset the form and input field
      this.form.reset();
      this.fileInput.nativeElement.value = '';
    }
  }

  toastNotification(res: any)
  {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle('Document Issue');
    newToastNotification.setMessage(res);

    // Choose layout color type
    newToastNotification.setConfig({
      autoCloseDelay: 2000,
      toastUserViewType: ToastUserViewTypeEnum.STANDARD,
      progressBar: ToastProgressBarEnum.NONE,
      layoutType: DialogLayoutDisplay.SUCCESS, // SUCCESS | INFO | NONE | DANGER | WARNING
      animationIn: AppearanceAnimation.ELASTIC, // optional
      animationOut: DisappearanceAnimation.FLIP_OUT, // optional
    });
    newToastNotification.openToastNotification$();
  }
  cancel()
  {
    // this.dialogRef.close();
  }
}
