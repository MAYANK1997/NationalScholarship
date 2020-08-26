import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship-details-list',
  templateUrl: './scholarship-details-list.component.html',
  styleUrls: ['./scholarship-details-list.component.css']
})
export class ScholarshipDetailsListComponent implements OnInit {

  institutionName:string = "UPES";
  presentCourse:string="B.Tech";
  presentCourseYear:number=2016;
  modeOfStudy:string="Virtual";
  classStartDate:string="1/10/2016";
  universityName:string="DU"
  previousCourse:string="12th"
  previousYear:number=2015;
  previousPassingYear:number=2015;
  previousClassPercentage:number=84;
  tenthRollNo:string="123456";
  tenthBoardName:string="CBSE"
  tenthPassingYear:number=2013
  tenthMarks:number=86
  twelthRollNo:string="98765";
  twelthboardName:string="CBSE";
  twelthpassingYear:number=2016;
  twelthmarks:number=90;
  admissionFee:number=83372;
  tutionFee:number=933678;
  otherFee:number=9748;
  

 
  studentId:number=425718;
  studentName:string="Jake";
  studentDOB:string="10/09/1991";
  studentGender:string="Male";
  studentDistrict:string="Thane";
  studentMobileNo:string="7894561232";
  studentEmail:string="jake@gmail.com";
  studentAadhar:string="1234567895";
  studentState:string="Maharashtra";
  instituteCode:number=757555;

  community:string="General";
  religion:string="Hindu";
  fatherName:string="Hari Prasad";
  motherName:string="Leelavati";
  isDisabled:string="No";
  typeOfDisability:string="No";
  fatherProfession:string="Business Man";
  motherProfession:string="Teacher";
  fatherIncome:string="1000000";
  maritalStatus:string="Single";
  locality:string="Juhu";
  city:string="Mumbai";
  state:string="Maharashtra";
  pincode:string="248001";

  accountNo:number=123456789;
  bankName:string="SBI";
  ifscCode:string="SBIN0004514";

  domicileCertificate:string="Domicile Certificate";
  studentPhotograph:string="Student Photograph";
  instituteId:string="Institute Id";
  casteCertificate:string="Caste Certificate";
  feeRecipt:string="Fee Recipt";
  bankPassbook:string="Bank Passbook";
  aadharCard:string="Aadhar Card";
  tenthMarksheet:string="Tenth Marksheet";
  twelthMarksheet:string="Twelth Marksheet";
 
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
