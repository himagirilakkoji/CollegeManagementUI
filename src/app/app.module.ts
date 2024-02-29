import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { StudentComponent } from './components/student/student.component';
import { ExamsComponent } from './components/exams/exams.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LogincontentComponent } from './components/logincontent/logincontent.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { FacultydashboardComponent } from './components/facultydashboard/facultydashboard.component';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminService } from './services/admin.service';
import { FacultyService } from './services/faculty.service';
import { StudentService } from './services/student.service';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    FacultyComponent,
    StudentComponent,
    ExamsComponent,
    RegisterComponent,
    LoginComponent,
    LogincontentComponent,
    AdmindashboardComponent,
    FacultydashboardComponent,
    StudentdashboardComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminService,FacultyService,StudentService,LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
