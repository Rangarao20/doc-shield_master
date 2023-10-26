import {
  AppearanceAnimation,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  ToastNotificationInitializer,
  ToastPositionEnum,
  ToastProgressBarEnum,
  ToastUserViewTypeEnum,
} from '@costlydeveloper/ngx-awesome-popup';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { BackendService } from 'src/app/Services/backend.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-doctypes',
  templateUrl: './doctypes.component.html',
  styleUrls: ['./doctypes.component.scss'],
})
export class DoctypesComponent {
  formstemp: any;

  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: BackendService,
    private data: DataService
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([]), // Initialize an empty FormArray
    });
    console.log(this.service.certificates);

    let url = 'https://docshield-docshield-offchain.apps.ocpdev.aramco.com.sas/doctype';

    this.data.certificate(url).subscribe((data) => {
      if (data.length === 0)
      {
        this.formstemp = [];
      }
      else
      {
        this.formstemp = data;
      }

    });
  }

  body: any;
  inputfield: boolean = false;
  clickedIndex: number = 0;
  clickedIndex1: number = 0;
  certificate_name: string = '';
  certificates: any = this.service.certificates;
  Fieldsarray: any = [];
  panelOpenState = false;
  searchText: string = '';
  certificatename: string = '';
  filteredItems: any = this.certificates;

  selecteditem(item: any, index: number) {
    // console.log("", item);

    this.certificate_name = item.certificate_name;
    this.clickedIndex = index;
    // console.log(this.clickedIndex);
    console.log(this.formstemp[this.clickedIndex].jsonb_data.Fields);
    const jsond = JSON.stringify(this.service.certificates[this.clickedIndex]);
    // console.log(jsond);
    // console.log(item.Fields);
    this.Fieldsarray = item.jsonb_data.Fields;
    if (item.jsonb_data.Fields.length > 0) {
      this.itemsFormArray.clear();
      // console.log("array");
      const initialData = item.jsonb_data.Fields;
      initialData.forEach((data: any) => {
        this.addItem(data);
        // console.log(data);
      });
    } else {
      this.itemsFormArray.clear();
      //  this.addItem();
    }
  }

  onSearchTextChange() {
    this.filteredItems = this.certificates.filter((item: any) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  addfield() {
    this.inputfield = true;

    // if(this.inputfield = false){
    //   this.inputfield = true;
    // }
    // else{
    //   this.inputfield = false;
    // }
  }
  removefield() {
    this.inputfield = false;
  }

  onEnterfield()
  {

    this.formstemp.push({
      certificate_name: this.certificatename,
      status: 'Active',
      jsonb_data: {
        Fields: [],
      },
    });
    this.inputfield = false;
  }

  // addnewfield(){
  //   console.log(this.certificates[this.clickedIndex].Fields)
  //   this.certificates[this.clickedIndex].Fields.push(
  //     {
  //         Label:"",
  //         Description:""
  //     }
  //   )
  // }

  get itemsFormArray() {
    return this.form.controls['items'] as FormArray;
  }

  addItem(data?: { name: string }) {
    const item = this.fb.group({
      name: [data ? data.name : '', Validators.required],
      // Description: [data ? data.Description : '', Validators.required]
      // Add more form controls as needed
    });

    this.itemsFormArray.push(item);
    console.log(this.itemsFormArray);
    console.log(this.formstemp[this.clickedIndex].jsonb_data.Fields);
  }

  removeItem(index: number) {
    const Fieldsarrayitem = this.service.certificates[this.clickedIndex].Fields;
    this.itemsFormArray.removeAt(index);
    console.log(Fieldsarrayitem);
    const filteredArray = Fieldsarrayitem.filter((item: any) => item !== index);
    this.service.certificates[this.clickedIndex].Fields = filteredArray;
  }

  onSubmit() {
    this.formstemp[this.clickedIndex].jsonb_data.Fields = [];
    if (this.form.valid) {
      console.log(this.formstemp[this.clickedIndex].jsonb_data.Fields);
      console.log(this.form.value.items);
      this.form.value.items.forEach((data: any) => {
        // this.service.certificates[this.clickedIndex].Fields = {};
        this.formstemp[this.clickedIndex].jsonb_data.Fields.push(data);
        // this.service.certificates[this.clickedIndex].push(data);
        console.log(data);
      });
      this.body = this.formstemp[this.clickedIndex];
      console.log(this.body);
      this.data.addc(this.body).subscribe((results) => {
        console.log(results);
        if(results === "Certificate Template Stored Successfuly")
        {
          this.toastNotification(results);
        }
      });
    }
  }

  toastNotification(res:any) {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle('Template');
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

    // Simply open the toast
    newToastNotification.openToastNotification$();
  }
}
