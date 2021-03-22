import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-ng]',
  //templateUrl: './ng.component.html',
  template: `
      <h1 style="background-color: mediumpurple; color: wheat; padding: 1em"> ng starts </h1>
      <h2>Two-way Binding</h2>

      <input [(ngModel)] = "twoway" type = "text"/>
      {{twoway}}

      <h2 style="font-style: 'italic'"> Structural Binding </h2> 

      <h2 [class] = "list">1. ngIf</h2>

          <h5 *ngIf="true"> if condition 1</h5>
          <h5 *ngIf="Condition"> if condition 2</h5>

          <h5 *ngIf="Condition; else elseblock">
            if condition 3
          </h5>
          <ng-template #elseblock>
            <h5> else condition </h5>
          </ng-template>

          <h5 *ngIf="Condition; then thenblock; else elseblock">
          </h5>
          <ng-template #thenblock>
            <h5> then block </h5>
          </ng-template>
          <ng-template #elseblock>
            <h5> else condition </h5>
          </ng-template>

      <h2 [class] = "list">2. ngSwitch</h2>

          <div [ngSwitch] = "color">
            <h5 *ngSwitchCase="'red'"> Picked red </h5>
            <h5 *ngSwitchCase="'green'"> Picked green </h5>
            <h5 *ngSwitchCase="'blue'"> Picked blue </h5>
            <h5 *ngSwitchDefault> Picked different </h5>
          </div>
      
      <h2 [class] = "list">3. ngFor</h2>
          
          <div *ngFor = "let colors of allColors">
            <h4>{{colors}}</h4>
          </div>

          <div *ngFor = "let colors of allColors; index as i">
            <h4>{{i}} {{colors}}</h4>
          </div>

          <div *ngFor = "let colors of allColors; first as f">
            <h4>{{f}} {{colors}}</h4> <!--similarly last-->
          </div>

          <div *ngFor = "let colors of allColors; odd as o">
            <h4>{{o}} {{colors}}</h4> <!--similarly even-->
          </div>

    `,
  styles: [`
    .text-list {
      color: orange;
    }
    h5{
      color:blue;
    }
    h4{
      color:black;
    }
    
  `]
})
export class NgComponent implements OnInit {

  public list = "text-list";

  Condition = false;
  public color = "orange";
  public allColors = ["red","blue","green","orange"];

  constructor() { }

  public twoway = "Two-way Binding" 

  ngOnInit(): void {
  }

}
