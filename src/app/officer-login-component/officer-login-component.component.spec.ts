import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerLoginComponentComponent } from './officer-login-component.component';

describe('OfficerLoginComponentComponent', () => {
  let component: OfficerLoginComponentComponent;
  let fixture: ComponentFixture<OfficerLoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerLoginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
