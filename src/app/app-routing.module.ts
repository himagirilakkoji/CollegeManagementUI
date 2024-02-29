import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogincontentComponent } from './components/logincontent/logincontent.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminAccessGuard } from './authservices/admin-access.guard';

const routes: Routes = [
  { path: "", component: LogincontentComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LogincontentComponent },
  { path: "admindashboard", component: AdmindashboardComponent,canActivate : [AdminAccessGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
