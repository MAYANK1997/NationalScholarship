import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-details-list',
  templateUrl: './institute-details-list.component.html',
  styleUrls: ['./institute-details-list.component.css']
})
export class InstituteDetailsListComponent implements OnInit {


  instituteName:string="UPES";
   instituteDiseCode:string="GHXHY";
   yearStarted:number=2016;
   instituteAdressOne:string="Race Course";
   instituteAdressTwo:string="NM 877123";
   instituteDistrict:string="DEHRADUN"
   instituteCity:string="DEHRADUN";
   instituteState:string="Uttarakhand";
   institutePincode:string="248001";
   affiliatedUniversityName:string="HNB University";
   affiliatedUniversityState:string="Uttarakhand";
   instituteEmail:string="Upes@gmail.com";
   principalName:string="Jake";
   contactNumber:string="7894561238";
   instituteCategory:string="Private";
   instituteType:string="Medical";
   establishmentCertificate:string="Institute Establishment Certificate";
   affiliatedCertificate:string="Institute Affiliated Certificate";
  isApproved1:boolean=true;
  isApproved2:boolean=true;
  isRejected1:boolean=true;
  isRejected2:boolean=true;
  constructor() { }

  ngOnInit() {
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
