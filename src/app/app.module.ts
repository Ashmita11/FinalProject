import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { AccountComponent } from './account/account.component';
import { ShowAccComponent } from './account/show-acc/show-acc.component';
import { AddEditAccComponent } from './account/add-edit-acc/add-edit-acc.component';
import {HttpClientModule}from'@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
       EmployeeComponent,
        ShowEmpComponent,
        AddEditEmpComponent,
        AccountComponent,
        ShowAccComponent,
        AddEditAccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
