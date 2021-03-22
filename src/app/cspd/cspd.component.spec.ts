import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CspdComponent } from './cspd.component';

describe('CspdComponent', () => {
  let component: CspdComponent;
  let fixture: ComponentFixture<CspdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CspdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
