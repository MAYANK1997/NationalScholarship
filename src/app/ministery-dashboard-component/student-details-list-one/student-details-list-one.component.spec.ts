import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsListOneComponent } from './student-details-list-one.component';

describe('StudentDetailsListOneComponent', () => {
  let component: StudentDetailsListOneComponent;
  let fixture: ComponentFixture<StudentDetailsListOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetailsListOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
