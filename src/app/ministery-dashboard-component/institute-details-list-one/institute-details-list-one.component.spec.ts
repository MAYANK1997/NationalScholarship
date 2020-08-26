import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteDetailsListOneComponent } from './institute-details-list-one.component';

describe('InstituteDetailsListOneComponent', () => {
  let component: InstituteDetailsListOneComponent;
  let fixture: ComponentFixture<InstituteDetailsListOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteDetailsListOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteDetailsListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
