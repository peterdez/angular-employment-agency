import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
    ) { }
  
  //list: any = []
  //employees = EMPLOYEES;
  //employees: Employee[] = [];
  employees = this.employeeService.getEmployees();
  employee: Employee = {
    id: 0,
    firstName: "",
    lastName: ""
  };


  Save() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
 }

 GetAll() {
  let value = localStorage.getItem("employees");
  if (value != '' && value != null && typeof value != "undefined") {
    this.employees = JSON.parse(value!);
  }
}

/*getEmployees(): void {
  this.employees = this.employeeService.getEmployees();
}*/

addEmployee() {
  let obj = {
    id: this.employees.length + 1,
    firstName: this.employee.firstName,
    lastName: this.employee.lastName,
  };
  this.employeeService.addEmployee(obj);
  //this.Save();
  this.employee = {
    id: 0,
    firstName: "",
    lastName: ""
  };
}

deleteEmployee(index: number) {
  this.employeeService.Delete(index);
}

deleteAllEmployees() {
  this.employeeService.DeleteAll();
  window.location.reload();
  //this.Save();
}

ngOnInit(): void {
  //this.getEmployees();
  //this.GetAll();
}

Add() {
  let obj = {
    id: this.employees.length + 1,
    firstName: this.employee.firstName,
    lastName: this.employee.lastName,
  };
  this.employees.push(obj);
  this.Save();
  this.employee = {
    id: 0,
    firstName: "",
    lastName: ""
  };
}

}
