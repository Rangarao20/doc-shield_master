import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';

import { Component } from '@angular/core';
import { DocissuepopupComponent } from 'src/app/shared-dialogs/docissuepopup/docissuepopup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor( private router: Router, public dialog: MatDialog){}
   user : any;
  ngOnInit(){
    this.user=history.state.data;
     console.log(this.user);
     this.router.navigateByUrl('/home', {state:{data:this.user}})
  }

  issuedoc() {
    const mdConfig = new MatDialogConfig();
    // mdConfig.disableClose = true;
    mdConfig.width = "auto"
    mdConfig.height = "auto"
    mdConfig.position = {right:"25px",top:"5vw"}
    this.dialog.open(DocissuepopupComponent,mdConfig);
    console.log("opened issue document")
  }
  logout()
  {
    this.router.navigateByUrl('');
  }
  doctype()
  {
    this.router.navigateByUrl('/doctype', {state:{data:this.user}})
  }
  issuedo()
  {
    this.router.navigateByUrl('/issuedoc', {state:{data:this.user}})
  }
  home()
  {
    this.router.navigateByUrl('/home', {state:{data:this.user}})
  }

}
