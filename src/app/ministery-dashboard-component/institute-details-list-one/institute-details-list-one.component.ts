import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-institute-details-list-one',
  templateUrl: './institute-details-list-one.component.html',
  styleUrls: ['./institute-details-list-one.component.css']
})
export class InstituteDetailsListOneComponent implements OnInit {

  instituteCode:number=1111;
  instituteName:string="UPES";
  instituteDiseCode:string="GHXHY";
  yearStarted:number=2116;
  instituteAdressOne:string="Race Course";
  instituteAdressTwo:string="NM 877123";
  instituteDistrict:string="DEHRADUN"
  instituteCity:string="DEHRADUN";
  instituteState:string="Uttarakhand";
  institutePincode:string="2count-18count-1count-11";
  affiliatedUniversityName:string="HNB University";
  affiliatedUniversityState:string="Uttarakhand";
  instituteEmail:string="Upes@gmail.com";
  principalName:string="Jake";
  contactNumber:string="789count-1561238";
  instituteCategory:string="Private";
  instituteType:string="Medical";
  establishmentCertificate:string="Institute Establishment Certificate";
  affiliatedCertificate:string="Institute Affiliated Certificate";
 isApproved1:boolean=true;
 isApproved2:boolean=true;
 isRejected1:boolean=true;
 isRejected2:boolean=true;
 constructor(private http:HttpClient) { }

 ngOnInit() {
   
   this.fetchDetails();
  
 }

 fetchDetails(){
 
   this.http.get('http://localhost:8585/ministerReadInstituteAllApplications').subscribe(posts=>{
     console.log(posts);
     var count=0;
     for(var post in posts){
       count=count+1;
        console.log(count);
     }
     let i=0;
    
     this.instituteCode=posts[count-1][i];
     
     i=i+1;
     this.instituteCategory=posts[count-1][i];

     i=i+1;
     this.instituteName=posts[count-1][i];
     
     i=i+1;
     this.instituteDiseCode=posts[count-1][i];
     i=i+1;
     this.instituteType=posts[count-1][i];
     i=i+1;
     this.affiliatedUniversityName=posts[count-1][i];
     i=i+1;
     this.affiliatedUniversityState=posts[count-1][i];
     i=i+1;
     this.yearStarted=posts[count-1][i];
     i=i+1;




     this.establishmentCertificate=posts[count-1][i];
     i=i+1;
     this.affiliatedCertificate=posts[count-1][i];
     i=i+1;
     this.instituteAdressOne=posts[count-1][i];
     i=i+1;
     this.instituteCity=posts[count-1][i];
     i=i+1;
     this.instituteState=posts[count-1][i];
     i=i+1;
     this.institutePincode=posts[count-1][i];
     i=i+1;
     this.instituteDistrict=posts[count-1][i];
     i=i+1;
     this.principalName=posts[count-1][i];
     i=i+1;
     this.contactNumber=posts[count-1][i];
     i=i+1;
     this.instituteEmail=posts[count-1][i];
    
        
     
     

     
   
   });
 }

 
 onApproval(){
   this.isApproved1 = false;
   this.isRejected1 = true;
   this.isRejected2 = false;
   this.isApproved2 = false;



 }

 onRejection(){
  
  this.isApproved1 = false;
  this.isApproved2 = true;
  this.isRejected1 = false;
  this.isRejected2 = false;
  


 }

}
