import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.component';
import { Employee } from '../employee/employee';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employees: Employee[];
    errorMessage: String;
    constructor(private _service: EmployeeService , private _route: Router) {}

    ngOnInit() {
        this._service.getAllEmployees().subscribe(res => {
            this.employees = res;
        },
        error => {
            console.log(error);
            this.errorMessage = error.message;
        }
        );
    }

    sortBy(sortType: string): Employee[] {
        this._service.getSortedEmployees(sortType).subscribe(
            res => {
                this.employees = res;
            },
            error => {
                this.errorMessage = error;
                console.log(error);
            }
        );
        return this.employees;
    }

    navigateTo(employee: Employee) {
        this._route.navigate([ '/employee' , employee.empId]);
    }
}
