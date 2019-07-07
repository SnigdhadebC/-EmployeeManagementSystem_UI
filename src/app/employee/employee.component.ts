import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.component';
import { ActivatedRoute } from '@angular/router';
import { Employee } from './employee';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
    private id: String;
    private employee: Employee;
    constructor(private _service: EmployeeService , private _activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
            this._service.getEmployeeById(this.id).subscribe(res => {
                this.employee = res;
            });
        });
    }
}
