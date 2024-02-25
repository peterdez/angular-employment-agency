import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeRegistrationComponent } from '../employee-registration/employee-registration.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  employees = this.employeeService.getEmployees();

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const employeeIdFromRoute = Number(routeParams.get('employeeId'));

  // Find the product that correspond with the id provided in route.
  this.employee = this.employees.find(employee => employee.id === employeeIdFromRoute);
  }

}
