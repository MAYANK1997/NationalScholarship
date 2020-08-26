import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteDetailsListComponent } from './institute-details-list.component';

describe('InstituteDetailsListComponent', () => {
  let component: InstituteDetailsListComponent;
  let fixture: ComponentFixture<InstituteDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
