import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signer-home',
  templateUrl: './signer-home.component.html',
  styleUrls: ['./signer-home.component.scss']
})
export class SignerHomeComponent {
  constructor( private router: Router){}
  logout()
  {
    this.router.navigateByUrl('');
  }

}
