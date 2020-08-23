import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentcontainercomponentComponent } from './maincontentcontainercomponent.component';

describe('MaincontentcontainercomponentComponent', () => {
  let component: MaincontentcontainercomponentComponent;
  let fixture: ComponentFixture<MaincontentcontainercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincontentcontainercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontentcontainercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
