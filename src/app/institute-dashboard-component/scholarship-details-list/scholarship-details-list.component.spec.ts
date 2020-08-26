import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipDetailsListComponent } from './scholarship-details-list.component';

describe('ScholarshipDetailsListComponent', () => {
  let component: ScholarshipDetailsListComponent;
  let fixture: ComponentFixture<ScholarshipDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
