import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { DoctypesComponent } from '../doctypes/doctypes.component';
import { HomeComponent } from '../home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IssuedocComponent } from '../issuedoc/issuedoc.component';
import { IssuerRoutingModule } from './issuer-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from '../main/main.component';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle' ;
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { SharedDialogsModule } from 'src/app/shared-dialogs/shared-dialogs.module';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    DoctypesComponent,
    IssuedocComponent,
  ],
  imports: [
    CommonModule,
    IssuerRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule, ReactiveFormsModule, MatTableModule,
    MatButtonModule, MatCardModule, MatRadioModule, MatDialogModule,MatCheckboxModule,MatStepperModule,MatExpansionModule,
    MatSlideToggleModule,HttpClientModule,MatProgressSpinnerModule,MatDatepickerModule,MatNativeDateModule,
    MatGridListModule,
    MatPaginatorModule,
    MatMenuModule,
    LayoutModule,
    MatSortModule,
    MatTabsModule,
    MatBadgeModule,
    SharedDialogsModule,
    MatSidenavModule,
    MatListModule,

  ]
})
export class IssuerModule { }
