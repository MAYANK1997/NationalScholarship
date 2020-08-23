import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteDashboardComponentComponent } from './institute-dashboard-component.component';

describe('InstituteDashboardComponentComponent', () => {
  let component: InstituteDashboardComponentComponent;
  let fixture: ComponentFixture<InstituteDashboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteDashboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
