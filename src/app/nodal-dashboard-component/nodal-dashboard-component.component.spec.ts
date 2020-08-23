import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalDashboardComponentComponent } from './nodal-dashboard-component.component';

describe('NodalDashboardComponentComponent', () => {
  let component: NodalDashboardComponentComponent;
  let fixture: ComponentFixture<NodalDashboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalDashboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
