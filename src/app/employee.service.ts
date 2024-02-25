import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employees: Employee[] = [];

  getEmployees() {
    //return EMPLOYEES;
    let value = localStorage.getItem("employees");
  if (value != '' && value != null && typeof value != "undefined") {
    this.employees = JSON.parse(value!);
  }
  return this.employees;
}

  Save() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
 }

 addEmployee(obj: Employee) {
  this.employees.push(obj);
  this.Save();
}

updateEmployee(id: number, updatedEmployee: Employee) {
  const updatedItem = this.employees.map((employee) => {
    return employee.id === id ? updatedEmployee : employee;
   });
   this.employees = updatedItem;
   this.Save();
}

Delete(index: number) {
  if (this.employees.length > index) {
    this.employees.splice(index, 1);
    this.Save();
  }
}

DeleteAll() {
  this.employees = [];
  this.Save();
}

}
