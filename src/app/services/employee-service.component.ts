import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee/employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

    private _api = 'http://localhost:8081/api/v1/employee';
    private _sortedByUrl = 'http://localhost:8081/api/v1/employee/sortBy';

    constructor(private _http: HttpClient) {}

    public getEmployeeById(id: String): Observable<Employee> {
        const modifiedUrl = this._api + '/' + id;
        return this._http.get<Employee>(modifiedUrl);
    }

   public getAllEmployees(): Observable<Array<Employee>> {
       return this._http.get<Employee[]>(this._api);
   }

   public getSortedEmployees(sortType: String): Observable<Array<Employee>> {
       const modifiedUrl = this._sortedByUrl + '/' + sortType;
       console.log(modifiedUrl);
       return this._http.get<Employee[]>(modifiedUrl);
   }
}
