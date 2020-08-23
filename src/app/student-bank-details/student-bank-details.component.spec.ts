import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBankDetailsComponent } from './student-bank-details.component';

describe('StudentBankDetailsComponent', () => {
  let component: StudentBankDetailsComponent;
  let fixture: ComponentFixture<StudentBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
