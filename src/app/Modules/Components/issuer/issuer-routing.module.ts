import { RouterModule, Routes } from '@angular/router';

import { DoctypesComponent } from '../doctypes/doctypes.component';
import { HomeComponent } from '../home/home.component';
import { IssuedocComponent } from '../issuedoc/issuedoc.component';
import { MainComponent } from '../main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"doctype",
        component:DoctypesComponent
      },
      {
        path:"issuedoc",
        component:IssuedocComponent
      }
    ]
  },
  // {
  //   path:"home",
  //   component:HomeComponent,
  // }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuerRoutingModule { }
