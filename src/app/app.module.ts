import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { DummyComponent } from './dummy/dummy.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HighlightDirective } from './highlight.directive';
import { LanguagesPipe } from './languages.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { ImagesComponent } from './images/images.component';
import { ChartsComponent } from './charts/charts.component';
import { Home1Component } from './home1/home1.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    HeaderComponent,
    DummyComponent,
    EmployeelistComponent,
    PaginationComponent,
    HighlightDirective,
    LanguagesPipe,
    EmployeeComponent,
    ImagesComponent,
    ChartsComponent,
    Home1Component,
    AdminComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '',
        component: Home1Component
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
