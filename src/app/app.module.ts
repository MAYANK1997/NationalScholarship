import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';



import { AppRoutingModule } from './app-routing.module';


import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { StudentRegisterComponentComponent } from './student-register-component/student-register-component.component';
import { InstituteRegisterComponentComponent } from './institute-register-component/institute-register-component.component';

import { InstituteLoginComponentComponent } from './institute-login-component/institute-login-component.component';
import { OfficerLoginComponentComponent } from './officer-login-component/officer-login-component.component';
import { SidecomponentComponent } from './sidecomponent/sidecomponent.component';
import { BannercomponentComponent } from './bannercomponent/bannercomponent.component';
import { MaincontentcontainercomponentComponent } from './maincontentcontainercomponent/maincontentcontainercomponent.component';
import { StudentDashboardComponentComponent } from './student-dashboard-component/student-dashboard-component.component';
import { InstituteDashboardComponentComponent } from './institute-dashboard-component/institute-dashboard-component.component';
import { NodalDashboardComponentComponent } from './nodal-dashboard-component/nodal-dashboard-component.component';
import { MinisteryDashboardComponentComponent } from './ministery-dashboard-component/ministery-dashboard-component.component';
import { StudentBasicDetailsComponent } from './student-basic-details/student-basic-details.component';
import { StudentAcademicDetailsComponent } from './student-academic-details/student-academic-details.component';
import { StudentBankDetailsComponent } from './student-bank-details/student-bank-details.component';
import { StudentDocumentUploadComponent } from './student-document-upload/student-document-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LandingPageComponentComponent,
    LoginComponentComponent,
    StudentRegisterComponentComponent,
    InstituteRegisterComponentComponent,
    InstituteLoginComponentComponent,
    OfficerLoginComponentComponent,
    SidecomponentComponent,
    BannercomponentComponent,
    MaincontentcontainercomponentComponent,
    StudentDashboardComponentComponent,
    InstituteDashboardComponentComponent,
    NodalDashboardComponentComponent,
    MinisteryDashboardComponentComponent,
    StudentBasicDetailsComponent,
    StudentAcademicDetailsComponent,
    StudentBankDetailsComponent,
    StudentDocumentUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
