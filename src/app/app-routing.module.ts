import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { ReceiveHomeComponent } from './Receiver/Receiver_page/receive-home/receive-home.component';
import { ReceiverHomeComponent } from './Receiver/Receiver_home/receiver-home/receiver-home.component';
import { SignerHomeComponent } from './Signer_comp/signer-home/signer-home.component';
import { SignerMainComponent } from './Signer_h/Signer_main/signer-main/signer-main.component';
import { SignerissueComponent } from './Signer_h/Signer_issued_doc/signerissue/signerissue.component';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent
  },
 {
  path:"main",
  loadChildren: () => import('../app/Modules/Components/issuer/issuer.module').then((m) => m.IssuerModule)
 },
 {
  path:"siginer",
  component:SignerHomeComponent
 },
 {
  path:"signin_h",
  component:SignerMainComponent
 },
 {
  path:"sigin_issue",
  component:SignerissueComponent
 },
 {
  path: "receiver_home",
  component:ReceiverHomeComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
