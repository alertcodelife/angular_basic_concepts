import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-class-binding]',
  // templateUrl: './class-binding.component.html',
  // styleUrls: ['./class-binding.component.css']
  template: `

    <h1 style="background-color: mediumpurple; color: wheat; padding: 1em"> Binding </h1>
    <h2> Class Binding </h2>

    <h5 class = "text-success"> Code Evolution </h5>
    <h5 [class] = "successClass">Code </h5>

    <h5 class = "text-special" [class]="successClass"> CodeEvolution </h5>
    <h5 [class.text-danger] = "hasError"> CodeEvolution </h5>

    <h5 [ngClass] = "messageClasses"> CodeEvolution</h5>

    <h2> Style Binding </h2>

    <h5 [style.color]="hasError ? 'red' : 'green'"> Style Binding </h5>
    <h5 [style.color]="highlightcolor">Style Binding 2 </h5>
    <h5 [ngStyle]="titleStyles"> Style Binding 3 </h5>

    <h2> Event binding </h2>

    <button (click)="onClick()">Greet</button>
    {{greeting}}
    <button (click)="onClickButton($event)">eventButton</button>
    <button (click)="greeting='Event Binding'">Greet</button>

    <h2> Template Reference Variables </h2>

    <input #myInput type = "text"/>
    <button (click)="logMessage(myInput.value)">Log</button>
    <button (click)="logMessage(myInput)">Log</button>
    
  `,
  styles: [`
    h2{
      text-transform: uppercase;
    }
    .text-success {
      color: yellow;
    }

    .text-danger {
      color: red;
    }

    .text-special {
      font-style:italic;
    }

  `]
})
export class ClassBindingComponent implements OnInit {

  public name = "CodeEvolution";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightcolor = "orange";
  public titleStyles = {
    color:"blue",
    fontStyle: "italic"
  }

  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log('Welcome');
    this.greeting = 'Divya';
  }

  onClickButton(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value){
    console.log(value);
  }

}
