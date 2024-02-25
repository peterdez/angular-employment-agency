import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EditEmployeeFormComponent } from './edit-employee-form/edit-employee-form.component';
//import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/employee-registration', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee-registration', component: EmployeeRegistrationComponent },
  { path: 'detail/:employeeId', component: EmployeeDetailComponent },
  { path: 'detail/:employeeId/edit', component: EditEmployeeFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
