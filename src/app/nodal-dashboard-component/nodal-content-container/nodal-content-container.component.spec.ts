import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalContentContainerComponent } from './nodal-content-container.component';

describe('NodalContentContainerComponent', () => {
  let component: NodalContentContainerComponent;
  let fixture: ComponentFixture<NodalContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
