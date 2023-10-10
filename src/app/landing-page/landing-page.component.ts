import { Component, inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';

import { DataService } from '../data.service';
import { SigninComponent } from '../Dialogs/signin/signin.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(public dialog: MatDialog,
    private data : DataService) {}

    ngOnInit()
    {
      let url = 'http://localhost:5000/doctype';

      this.data.certificate(url).subscribe((data) =>
      {
          console.log(data);
      });
    }
  openDialog() {

    const mdConfig = new MatDialogConfig();
    // mdConfig.disableClose = true;
    mdConfig.width = "auto"
    mdConfig.height = "auto"
    mdConfig.position = {right:"0px",top:"5vw"}
    this.dialog.open(SigninComponent,mdConfig)
  }
}


