import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css']
})
export class EditEmployeeFormComponent implements OnInit {

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

  editEmployee(id: number, updatedEmployee: Employee) {
   this.employeeService.updateEmployee(id, updatedEmployee);
   this.location.back();
  }

}
