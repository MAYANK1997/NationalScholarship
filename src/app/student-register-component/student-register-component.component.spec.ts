import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterComponentComponent } from './student-register-component.component';

describe('StudentRegisterComponentComponent', () => {
  let component: StudentRegisterComponentComponent;
  let fixture: ComponentFixture<StudentRegisterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegisterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
