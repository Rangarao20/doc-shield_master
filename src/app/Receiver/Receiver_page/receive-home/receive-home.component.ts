import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-receive-home',
  templateUrl: './receive-home.component.html',
  styleUrls: ['./receive-home.component.scss']
})
export class ReceiveHomeComponent
{

  constructor( private router: Router){}
  logout()
  {
    this.router.navigateByUrl('');
  }
}
