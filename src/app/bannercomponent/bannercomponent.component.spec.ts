import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercomponentComponent } from './bannercomponent.component';

describe('BannercomponentComponent', () => {
  let component: BannercomponentComponent;
  let fixture: ComponentFixture<BannercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
