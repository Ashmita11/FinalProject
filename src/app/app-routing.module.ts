import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'account',component:AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
