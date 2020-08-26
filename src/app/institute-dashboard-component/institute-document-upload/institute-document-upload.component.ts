import { Component, OnInit } from '@angular/core';
import { UploadFileService } from './institute-uploadfile.service';

@Component({
  selector: 'app-institute-document-upload',
  templateUrl: './institute-document-upload.component.html',
  styleUrls: ['./institute-document-upload.component.css']
})
export class InstituteDocumentUploadComponent implements OnInit{
  instituteAffCert: File;
  instituteEstbCert:File;
  instituteCode: any;

  constructor(private uploadfileservice: UploadFileService) { }

  ngOnInit(): void {
    this.instituteCode = 10102;
  }
  onFileChange(event){

    this.instituteAffCert= event.target.files[0];
    this.instituteEstbCert = event.target.files[1];
    

  }


  upload() {
    let formData: FormData = new FormData();
    formData.append('instituteCode', this.instituteCode);
    formData.append('instituteAffCert', this.instituteAffCert);
    formData.append('instituteEstbCert', this.instituteEstbCert);

    console.log(formData.get('instituteAffCert'));
  
    this.uploadfileservice.upload(formData).subscribe(data => {
      alert(JSON.stringify(data));
    })
  }
}
