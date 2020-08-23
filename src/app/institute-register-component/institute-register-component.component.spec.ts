import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteRegisterComponentComponent } from './institute-register-component.component';

describe('InstituteRegisterComponentComponent', () => {
  let component: InstituteRegisterComponentComponent;
  let fixture: ComponentFixture<InstituteRegisterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteRegisterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteRegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
