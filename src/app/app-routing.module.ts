import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { CspdComponent } from './cspd/cspd.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeService } from './employee.service';
import { NgComponent } from './ng/ng.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteConceptsComponent } from './route-concepts/route-concepts.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full'},
  { path: 'test', component: TestComponent},
  { path: 'classBinding', component: ClassBindingComponent},
  { path: "ngDescription", component: NgComponent},
  { path: "CSPD", component: CspdComponent},
  { path: "employees", component: RouteConceptsComponent},
  { 
    path: "employees/:id", 
    component: EmployeeDetailComponent,
    children: [
      { path: 'overview', component: EmployeeOverviewComponent},
      { path: 'contact', component: EmployeeContactComponent}
    ]
  },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestComponent, 
                                  ClassBindingComponent, 
                                  NgComponent, 
                                  CspdComponent,
                                  RouteConceptsComponent,
                                  EmployeeDetailComponent,
                                  EmployeeOverviewComponent,
                                  EmployeeContactComponent,
                                  PageNotFoundComponent
                                ]
