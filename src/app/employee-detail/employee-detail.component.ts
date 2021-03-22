import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h3> Route Parameters </h3>
    <h3> Selected id : {{employeeId}} </h3>
    <a (click)="goPrevious()"> Previous </a>
    <a (click)="goNext()"> Next </a>

    <h3> ParamMap Observable </h3>
    <button (click)="goPrevious()"> Previous </button>
    <button (click)="goNext()"> Next </button>

    <h3> Optional Route Parameters </h3>
    <div>
      <button (click) = "goToEmployees()"> Back </button>
    </div>

    <h3> Child Routes </h3>
    <p>
      <button (click) = "showOverview()">Overview</button>
      <button (click) = "showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

  `,
  styles: [`
  a {
    cursor: pointer;
    cursor: hand;
  }
  `]
})
export class EmployeeDetailComponent implements OnInit {

  public employeeId;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.employeeId = id;
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    });
  }

  goPrevious(){
    let previousId = this.employeeId - 1;
    this.router.navigate(['/employees', previousId]);
  }

  goNext(){
    let nextId = this.employeeId + 1;
    this.router.navigate(['/employees', nextId]);
  }

  goToEmployees(){
    let selectedId = this.employeeId ? this.employeeId : null;
    // this.router.navigate(['/employees', {id: selectedId, test: 'testvalue'}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
