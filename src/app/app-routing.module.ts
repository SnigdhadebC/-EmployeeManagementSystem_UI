import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
    {path: 'employee/:id' , component: EmployeeComponent},
    {path: 'employee' , redirectTo: '' , pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
