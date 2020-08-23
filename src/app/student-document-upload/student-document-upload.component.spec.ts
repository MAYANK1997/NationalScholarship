import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDocumentUploadComponent } from './student-document-upload.component';

describe('StudentDocumentUploadComponent', () => {
  let component: StudentDocumentUploadComponent;
  let fixture: ComponentFixture<StudentDocumentUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDocumentUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
