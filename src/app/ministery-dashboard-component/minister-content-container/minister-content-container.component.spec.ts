import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterContentContainerComponent } from './minister-content-container.component';

describe('MinisterContentContainerComponent', () => {
  let component: MinisterContentContainerComponent;
  let fixture: ComponentFixture<MinisterContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisterContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
