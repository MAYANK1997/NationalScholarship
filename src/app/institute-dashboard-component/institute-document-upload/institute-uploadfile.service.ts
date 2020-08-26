import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'})
    export class UploadFileService {
      constructor(private https: HttpClient) { }
     


  upload(formData: FormData) {
    let url='http://localhost:8585/docUpload';
    return this.https.post(url, formData);
  }


}