import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { InstituteRegisterComponentComponent } from './institute-register-component/institute-register-component.component';
import { StudentRegisterComponentComponent } from './student-register-component/student-register-component.component';
import { InstituteLoginComponentComponent } from './institute-login-component/institute-login-component.component';
import { OfficerLoginComponentComponent } from './officer-login-component/officer-login-component.component';
import { StudentDashboardComponentComponent } from './student-dashboard-component/student-dashboard-component.component';
import { InstituteDashboardComponentComponent } from './institute-dashboard-component/institute-dashboard-component.component';
import { NodalDashboardComponentComponent } from './nodal-dashboard-component/nodal-dashboard-component.component';
import { MinisteryDashboardComponentComponent } from './ministery-dashboard-component/ministery-dashboard-component.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {path:'', component:LandingPageComponentComponent},
  {path:'login', component:LoginComponentComponent},
  {path:'instituteregister', component:InstituteRegisterComponentComponent},
  {path:'studentregister', component:StudentRegisterComponentComponent},
  {path:'institutelogin', component:InstituteLoginComponentComponent},
  {path:'officerlogin', component:OfficerLoginComponentComponent},
  {path:'studentdashboard', component:StudentDashboardComponentComponent},
  {path:'institutedashboard', component:InstituteDashboardComponentComponent},
  {path:'nodaldashboard', component:NodalDashboardComponentComponent},
  {path:'ministerdashboard', component:MinisteryDashboardComponentComponent,canActivate: [AuthGuard]},
  
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
