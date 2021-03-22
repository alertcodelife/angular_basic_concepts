import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
// import { ClassBindingComponent } from './class-binding/class-binding.component'; 
// import { NgComponent } from './ng/ng.component';
// import { CspdComponent } from './cspd/cspd.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { RouteConceptsComponent } from './route-concepts/route-concepts.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { NoteUpdateComponent } from './note-update/note-update.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
// import { RouteConceptsComponent } from './route-concepts/route-concepts.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RouteConceptsComponent,
    EmployeeOverviewComponent,
    EmployeeContactComponent,
    NoteUpdateComponent,
    // EmployeeDetailComponent,
    // RouteConceptsComponent,
    // PageNotFoundComponent,
    // TestComponent,
    // ClassBindingComponent,
    // NgComponent,
    // CspdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
