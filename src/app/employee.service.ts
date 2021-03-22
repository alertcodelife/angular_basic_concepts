import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
// import { catch } from 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// import { catchError } from 'rxjs/operators/catchError';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/HttpEmployees.json";
 
  constructor(private http: HttpClient) { }

  getEmployees(){
    return [
      {"id": 1, "name": "Divya", "age": 5},
      {"id": 2, "name": "Madhuri", "age": 6},
      {"id": 3, "name": "Manoj", "age": 50},
      {"id": 4, "name": "Krishna", "age": 55},
    ]
  }

  getHttpEmp(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
                      // .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error" );   
  }
}
