import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { ErrorDiaglogComponent } from './error-diaglog/error-diaglog.component';
import { HttpClientModule } from '@angular/common/http';
import { IssuerModule } from './Modules/Components/issuer/issuer.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LayoutModule } from '@angular/cdk/layout';
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
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle' ;
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ReceiveHomeComponent } from './Receiver/Receiver_page/receive-home/receive-home.component';
import { ReceiverHomeComponent } from './Receiver/Receiver_home/receiver-home/receiver-home.component';
import { SharedDialogsModule } from './shared-dialogs/shared-dialogs.module';
import { SignerHomeComponent } from './Signer_comp/signer-home/signer-home.component';
import { SignerMainComponent } from './Signer_h/Signer_main/signer-main/signer-main.component';
import { SignerissueComponent } from './Signer_h/Signer_issued_doc/signerissue/signerissue.component';
import { SigninComponent } from './Dialogs/signin/signin.component';

// import { DocissuepopupComponent } from './Dialogs/docissuepopup/docissuepopup.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SigninComponent,
    ErrorDiaglogComponent,
    SignerHomeComponent,
    SignerMainComponent,
    SignerissueComponent,
    ReceiveHomeComponent,
    ReceiverHomeComponent,
    // DocissuepopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule, ReactiveFormsModule, MatTableModule,
    MatButtonModule, MatCardModule, MatRadioModule, MatDialogModule,MatCheckboxModule,MatStepperModule,MatExpansionModule,
    MatSlideToggleModule,HttpClientModule,MatProgressSpinnerModule,MatDatepickerModule,MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatSortModule,
    MatTabsModule,
    MatBadgeModule,
    IssuerModule,
    SharedDialogsModule,
    HttpClientModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot() // Needed for instantiating toast notifications.


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
