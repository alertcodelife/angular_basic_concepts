import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteConceptsComponent } from './route-concepts.component';

describe('RouteConceptsComponent', () => {
  let component: RouteConceptsComponent;
  let fixture: ComponentFixture<RouteConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
