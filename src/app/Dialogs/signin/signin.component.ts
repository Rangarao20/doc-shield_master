// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AppearanceAnimation,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  ToastNotificationInitializer,
  ToastPositionEnum,
  ToastProgressBarEnum,
  ToastUserViewTypeEnum,
} from '@costlydeveloper/ngx-awesome-popup';
import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DataService } from 'src/app/data.service';
import { ErrorDiaglogComponent } from 'src/app/error-diaglog/error-diaglog.component';
import { MatDialog } from '@angular/material/dialog';
import { slideRightToLeftAnimation } from '../../Animations/animations';
import { userdet } from 'src/app/classes/userdet';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [slideRightToLeftAnimation],
})
export class SigninComponent {
  users!: userdet[];
  flag: any;
  constructor(
    private http: HttpClient,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private data: DataService,
    public dialogRef: MatDialogRef<SigninComponent>,
    public dialog: MatDialog // @Inject(MAT_DIALOG_DATA)  data:DataService,
  ) {}
  signin() {
    let url = 'http://localhost:5000/userlogin';
    let params = new URLSearchParams();
    let name = (document.getElementById('user') as HTMLInputElement).value;
    let pass = (document.getElementById('pass') as HTMLInputElement).value;

    if (name === '' || pass === '') {
      // const errorMessage = 'Please Enter the Username or Password';
      // this.openErrorDialog(errorMessage);
      this.toastNotification2();
    } else {
      console.log(name, pass);
      params.append('name', name);
      let url1 = url + '/' + name;
      //   this.http.get(url1).subscribe(
      //   function(data: any)
      //  {
      //    console.log(data);

      //  })
      this.data.login(url1).subscribe((data) => {
        console.log(data);
        this.users = data;
        if (data.length === 0) {
          const errorMessage = 'User Does Not Exists';
          this.openErrorDialog(errorMessage);
        } else {
          const p = data[0].Password;
          const r = data[0].Role;
          const user = data[0].Name;
          if (pass == p) {
            this.flag = 1;
            console.log(this.flag);
            if (this.flag == 1) {
              // const errorMessage = 'Login Succesfull !';
              // this.openErrorDialog(errorMessage);
              // this.dialogRef.close();
              this.toastNotification();
              if (r == 'Issuer')
              {
                this.router.navigateByUrl('/main' ,{state:{data:user}});
              }
              else if (r == 'Signer')
              {
                this.router.navigateByUrl('/sigin_issue',{state:{data:user}});
              }
              else if (r == 'Receiver')
              {
                this.router.navigateByUrl('/receiver_home');
              }
              this.dialogRef.close();
            }
          } else {
            this.toastNotification1();
            // const errorMessage = 'Wrong password. Please try again.'; // Customize the error message
            // this.openErrorDialog(errorMessage);
          }
        }
      });
    }
  }
  password: string = '';
  hide: boolean = true;
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  openErrorDialog(errorMessage: string): void {
    const dialog = this.dialog.open(ErrorDiaglogComponent, {
      width: '400px', // Customize the width as needed
      height: '200px',
      data: { errorMessage }, // Pass the error message to the dialog
    });

    dialog.afterClosed().subscribe(() => {
      console.log('The error dialog was closed.');
      // You can perform additional actions after the dialog is closed if needed
    });
  }

  toastNotification() {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle('Login');
    newToastNotification.setMessage('Login Successfull!');

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

  toastNotification1() {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle('Login');
    newToastNotification.setMessage('wrong Password, Please try again');

    // Choose layout color type
    newToastNotification.setConfig({
      autoCloseDelay: 2000,
      toastUserViewType: ToastUserViewTypeEnum.STANDARD,
      progressBar: ToastProgressBarEnum.NONE,
      layoutType: DialogLayoutDisplay.WARNING, // SUCCESS | INFO | NONE | DANGER | WARNING
      animationIn: AppearanceAnimation.ELASTIC, // optional
      animationOut: DisappearanceAnimation.FLIP_OUT, // optional
    });

    // Simply open the toast
    newToastNotification.openToastNotification$();
  }

  toastNotification2() {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle('Login');
    newToastNotification.setMessage('Please Enter User name and Password');

    // Choose layout color type
    newToastNotification.setConfig({
      autoCloseDelay: 2000,
      toastUserViewType: ToastUserViewTypeEnum.STANDARD,
      toastPosition: ToastPositionEnum.TOP_CENTER,
      progressBar: ToastProgressBarEnum.NONE,
      layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
      animationIn: AppearanceAnimation.ELASTIC, // optional
      animationOut: DisappearanceAnimation.FLIP_OUT, // optional
    });

    // Simply open the toast
    newToastNotification.openToastNotification$();
  }
}
