import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisteryDashboardComponentComponent } from './ministery-dashboard-component.component';

describe('MinisteryDashboardComponentComponent', () => {
  let component: MinisteryDashboardComponentComponent;
  let fixture: ComponentFixture<MinisteryDashboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisteryDashboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisteryDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
