import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteDocumentUploadComponent } from './institute-document-upload.component';

describe('InstituteDocumentUploadComponent', () => {
  let component: InstituteDocumentUploadComponent;
  let fixture: ComponentFixture<InstituteDocumentUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteDocumentUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteDocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
