import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteLoginComponentComponent } from './institute-login-component.component';

describe('InstituteLoginComponentComponent', () => {
  let component: InstituteLoginComponentComponent;
  let fixture: ComponentFixture<InstituteLoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteLoginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
