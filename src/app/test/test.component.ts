import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
              Welcome to {{name}}!!!!
            </div>
            <div style = "text-align:left">
              hello Dec {{1+16}}
              <h4>{{"Begin " + name}}</h4>
              <h6>{{name.length}}</h6>
              {{name.toUpperCase()}}

              <h3> {{greetUser()}}</h3>

              <input type = "text" value = "text-field">

              <input id = "property" type = "text" value = "Property Binding">
              <input disabled = "false" id = "{{property}}" type = "text" value = "Property Binding">
              <input [disabled] = "true" id = "{{property}}" type = "text" value = "Property Binding"/>
              
              <input [disabled] = "isDisabled" id = "{{property}}" type = "text" value = "Property Binding">
              <input bind-disabled = "isDisabled" id = "{{property}}" type = "text" value = "Property Binding">
              

            </div>

            <!--<div app-class-binding>

            </div>-->
            `,
  styles: [`
      div{
        color: green
      }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Step';

  public property  = 'Property-id';

  public isDisabled = 'true';

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Method " + this.name;
  }

}