import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-cspd',
  template: `

    <h1 style="background-color: mediumpurple; color: wheat; padding: 1em"> Component Interaction</h1>
        <h4> {{"1. Hello " + parentData}}</h4>
        <h4> {{"2. Binding name " + name}} </h4>

        <button (click)="fireEvent()"> Send event </button>

    <div>
    
    <h1 style="background-color: mediumpurple; color: wheat; padding: 1em"> Pipes </h1>

        <h5> {{ pipeDesc }} </h5>
        <h5> {{ pipeDesc | lowercase }} </h5>
        <h5> {{ pipeDesc | uppercase }} </h5>
        <h5> {{ pipeMsg | titlecase }} </h5>
        <h5> {{ pipeDesc | slice:3 }} </h5>
        <h5> {{ pipeDesc | slice:3:5 }} </h5>
        <h5> {{ pipePersons | json }} </h5>

        <h5> {{5.678 | number:'1.2-3'}}</h5>
        <h5> {{5.678 | number:'3.4-5'}}</h5>
        <h5> {{5.678 | number:'3.1-2'}}</h5>

        <h5> {{ 0.25 | percent }} </h5>

        <h5> {{0.25 | currency }}</h5>
        <h5> {{0.25 | currency: 'GBP': 'code' }}</h5>  <!--'EUR'-->

        <h5> {{ date }} </h5>
        <h5> {{ date | date:'short' }} </h5>
        <h5> {{ date | date:'shortDate' }} </h5>
        <h5> {{ date | date:'shortTime' }} </h5>
    </div>

    <div>
    <h1 style="background-color: mediumpurple; color: wheat; padding: 1em"> Services </h1>
      <h3 style = "color: green"> - Dependency Injection  </h3>
          <h5> Employee List </h5>
          <h5>
            <ul *ngFor="let employee of employees">
              <li> {{employee.name}} </li>
            </ul>
          </h5>
          <h5> Employee Details </h5>
          
          <h5>
            <ul *ngFor="let employee of employees">
              <li> {{employee.id}}. {{employee.name}} - {{employee.age}} </li>
            </ul>
          </h5>

      <h3 style = "color: green"> -Http and observables  </h3>
          <h5> httpEmployee List </h5>
          <h5>
            Error:{{errorMsg}}
            <ul *ngFor="let httpEmployee of httpEmployees">
              <li> {{httpEmployee.name}} </li>
            </ul>
          </h5>
          <h5> httpEmployee Details </h5>
          
          <h5>
            Error:{{errorMsg}}
            <ul *ngFor="let httpEmployee of httpEmployees">
              <li> {{httpEmployee.id}}. {{httpEmployee.name}} - {{httpEmployee.age}} </li>
            </ul>
          </h5>
    </div>
  
  `,
  styles: [
    `h1{
      color: green;
      text-transform: uppercase;
    }
  `]
})
export class CspdComponent implements OnInit {

  @Input() public parentData; //1. Hello Divya
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  public pipeDesc  = "Codevolution";
  public pipeMsg = "Welcome to codevolution";
  public pipePersons = {
    "firstName": "Divya",
    "lastName": "Madhuri"
  }
  public date = new Date();

  public employees = [];
  public httpEmployees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
    this._employeeService.getHttpEmp()
      .subscribe(data => this.httpEmployees = data,
                 error => this.errorMsg = error);
  }

  fireEvent() {
    this.childEvent.emit('Angular from cspd');
  }

}
