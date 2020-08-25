import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContentContainerComponent } from './student-content-container.component';

describe('StudentContentContainerComponent', () => {
  let component: StudentContentContainerComponent;
  let fixture: ComponentFixture<StudentContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
