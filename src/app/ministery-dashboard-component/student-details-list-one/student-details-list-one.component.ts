import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-details-list-one',
  templateUrl: './student-details-list-one.component.html',
  styleUrls: ['./student-details-list-one.component.css']
})
export class StudentDetailsListOneComponent implements OnInit {

  statusId: number = 1234;
  instituteApprovalStatus: boolean;
  nodalOfficerApprovalStatus: boolean;
  ministryOfficerApprovalStatus: boolean;
  instituteApprovalStatusDes: string;
  nodalOfficerApprovalStatusDes: string;
  ministryOfficerApprovalStatusDes: string;
  scholarshipStatusDesc:string;

  institutionName:string = "UPES";
  presentCourse:string="B.Tech";
  presentCourseYear:number=200;
  modeOfStudy:string="Virtual";
  classStartDate:string="1/10/200";
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
  twelthpassingYear:number=200;
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




  
  constructor(private http: HttpClient) { }

 
  ngOnInit() {
    this.fetchDetails();
   this.fetchStatus();
  }

  fetchDetails(){
    let instituteCode = JSON.parse(localStorage.getItem('instituteDetails')).personalId;
    this.http.get('http://localhost:8585/instituteReadStudentAllApplications?instituteCode='+instituteCode).subscribe(posts=>{
      console.log(posts);
    
      let i=0;
      
    
      this.studentName=posts[0][i];
      i=i+1;
      this.studentDOB=posts[0][i];

      i=i+1;
      this.studentGender=posts[0][i];
      
      i=i+1;
      this.studentMobileNo=posts[0][i];
      i=i+1;
      this.studentEmail=posts[0][i];
      i=i+1;
      this.studentAadhar=posts[0][i];
      i=i+1;
      this.studentState=posts[0][i];
      i=i+1;
      this.studentDistrict=posts[0][i];
      i=i+1;




      this.institutionName=posts[0][i];
      i=i+1;
      this.presentCourse=posts[0][i];
      i=i+1;
      this.presentCourseYear=posts[0][i];
      i=i+1;
      this.modeOfStudy=posts[0][i];
      i=i+1;
      this.classStartDate=posts[0][i];
      i=i+1;
      this.universityName=posts[0][i];
      i=i+1;
      this.previousCourse=posts[0][i];
      i=i+1;
      this.previousYear=posts[0][i];
      i=i+1;
      this.previousPassingYear=posts[0][i];
      i=i+1;
      this.tenthRollNo=posts[0][i];
      i=i+1;
      
      this.tenthBoardName=posts[0][i];
      i=i+1;
      
      this.tenthPassingYear=posts[0][i];
      i=i+1;
      this.tenthMarks=posts[0][i];
      i=i+1;
      this.twelthRollNo=posts[0][i];
      i=i+1;
      this.twelthboardName=posts[0][i];
      i=i+1;
      this.twelthpassingYear=posts[0][i];
      i=i+1;
      this.twelthmarks=posts[0][i];
      i=i+1;
      this.admissionFee=posts[0][i];
      i=i+1;
      this.tutionFee=posts[0][i];
      i=i+1;
      this.otherFee=posts[0][i];
      i=i+4;
      this.community=posts[0][i];
      i=i+1;
      this.religion=posts[0][i];
      i=i+1;
      this.fatherName=posts[0][i];
      i=i+1;
      this.motherName=posts[0][i];
      i=i+1;
      this.isDisabled=posts[0][i];
      i=i+1;
      this.typeOfDisability=posts[0][i];
      i=i+1;
      this.fatherProfession=posts[0][i];
      i=i+1;
      this.motherProfession=posts[0][i];
      i=i+1;
      this.fatherIncome=posts[0][i];
      i=i+1;
      this.maritalStatus=posts[0][i];
      i=i+1;
      this.locality=posts[0][i];
      i=i+1;
      this.city=posts[0][i];
      i=i+1;
      this.state=posts[0][i];
      i=i+1;
      this.pincode=posts[0][i];
      i=i+1;
      this.accountNo=posts[0][i];
      i=i+1;
      this.bankName=posts[0][i];
      i=i+1;
      this.ifscCode=posts[0][i];

      
    
    });
  }

  fetchStatus(){
    this.http.get('http://localhost:8585/getOwnApplicationStudentStatus?personalId='+JSON.parse(localStorage.getItem('applicationDetails')).personalId).subscribe(posts=>{

    console.log(this.instituteApprovalStatus = posts[0][2]);

    this.statusId = posts[0][0];
    this.scholarshipStatusDesc = posts[0][1];
    this.instituteApprovalStatus = posts[0][2];
    this.nodalOfficerApprovalStatus = posts[0][3];
    this.ministryOfficerApprovalStatus = posts[0][4];

    if(this.instituteApprovalStatus==false){
       
         this.instituteApprovalStatusDes = "Pending";
     

    }else{

      this.instituteApprovalStatusDes = "Approved";
    
    }

    if(this.nodalOfficerApprovalStatus==false){
     
      this.nodalOfficerApprovalStatusDes="Pending";
      
 
     }else{
 
      
       this.nodalOfficerApprovalStatusDes="Approved";
    
     }

     if(this.ministryOfficerApprovalStatus==false){
    
      this.ministryOfficerApprovalStatusDes="Pending";
 
     }else{
 
       this.ministryOfficerApprovalStatusDes="Approved";
     }


   

  });
  }


  onApproval12(){

    console.log(this.ministryOfficerApprovalStatus);
    this.http.post('http://localhost:8585/MinisterUpdatesStudentStatus',

      {
         ministryOfficerApprovalStatus:true,
         studentId:JSON.parse(localStorage.getItem('applicationDetails')).personalId
       

      }


    ).subscribe(respnseDate => {

      console.log(respnseDate);
      console.log(this.ministryOfficerApprovalStatus);

    });
     this.isApproved1 = false;
     this.isRejected1 = true;
     this.isRejected2 = false;
     this.isApproved2 = false;
     
    

   }
   
   onRejection12(){
    console.log(this.ministryOfficerApprovalStatus);
    this.http.post('http://localhost:8585/MinisterUpdatesStudentStatus',
    

      {
         ministryOfficerApprovalStatus:false,
         studentId:JSON.parse(localStorage.getItem('applicationDetails')).personalId
       

      }
      
     
    ).subscribe(respnseDate => {

      console.log(respnseDate);
      console.log(this.ministryOfficerApprovalStatus);

    });
    this.isApproved1 = false;
    this.isApproved2 = true;
    this.isRejected1 = false;
    this.isRejected2 = false;
    


   }
}
