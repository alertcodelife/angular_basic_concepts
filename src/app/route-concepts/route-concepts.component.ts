import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route-concepts',
    // templateUrl: './route-concepts.component.html',
    template: `
    <h2> Route Parameters </h2>
      <h5>
        <ul *ngFor="let employee of employees">
          <li> {{employee.id}}. {{employee.name}} - {{employee.age}} </li>
        </ul>
      </h5> 
      <h5>
      <ul>
        <li (click) = "onSelect(employee)" *ngFor="let employee of employees">
          <!-- <button> {{employee.id}}. {{employee.name}} - {{employee.age}} </button> -->
          <span class = "badge"> {{employee.id}} </span> {{employee.name}}
        </li>
      </ul>
      </h5>
      
      <h3> Optional Route Parameters </h3>
      <h5>
      <ul>
        <li (click) = "onSelect(employee)" [class.selected] = "isSelected(employee)" *ngFor="let employee of employees">
          <span class = "badge"> {{employee.id}} </span> {{employee.name}} 
        </li>
      </ul>
      </h5>
  `,
  styles: [`
    .selected {
      color: red;
    }

    h5{
      text-align: left;
    }
  `]
})
export class RouteConceptsComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "H - Divya", "age": 5},
    {"id": 2, "name": "H - Madhuri", "age": 6},
    {"id": 3, "name": "H - Manoj", "age": 50},
    {"id": 4, "name": "H - Krishna", "age": 55},
    {"id": 5, "name": "H - Sai Baba", "age": 75},
    {"id": 6, "name": "H - Lakshmi", "age": 55}
  ];

  public selectedId;
  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees();
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(employee){
    //this.router.navigate(['/employees',employee.id]);
    this.router.navigate([employee.id], {relativeTo: this.route});
  }

  isSelected(employee){
    return employee.id === this.selectedId;
  }

}
