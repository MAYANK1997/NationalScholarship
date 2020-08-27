import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';




@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  isLoading = false;
  serialNumber: number = 1;
  scholarshipName: string = "Merit-cum-Means based";
  scholarshipDescription: string = "The Maharashtra DTE Scholarship..";
  scholarshipLevel: string = "State";
  scholarshipAmount: number = 200000;
  scholarshipStatus: string = "Active";
  toApply: boolean = true;
  isApplied: boolean;
  isStatus: boolean = false;
  statusId: number = 1234;
  instituteApprovalStatus: boolean;
  nodalOfficerApprovalStatus: boolean;
  ministryOfficerApprovalStatus: boolean;
  instituteApprovalStatusDes: string;
  nodalOfficerApprovalStatusDes: string;
  ministryOfficerApprovalStatusDes: string;
  scholarshipStatusDesc:string;


  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    
    this.fetchStatus();


  }


  
  apply() {
    this.toApply = !this.toApply;

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


     if(this.instituteApprovalStatus){
                    this.isApplied = true;

     }

  });
  }

  onSubmit(form: NgForm) {
    const community = form.value.community;
    const religion = form.value.religion;
    const fatherName = form.value.fatherName;
    const motherName = form.value.motherName;
    const isDisabled = form.value.disabled;
    const typeOfDisability = form.value.typeOfDisability;
    const fatherProfession = form.value.fatherProfession;
    const motherProfession = form.value.motherProfession;
    const fatherIncome = form.value.fatherIncome;
    const maritalStatus = form.value.maritalStatus;
    const locality = form.value.locality;
    const city = form.value.city;
    const state = form.value.state;
    const pincode = form.value.pincode;
    const instituteName = form.value.institute_name;
    const presentCourse = form.value.present_course;
    const presentCourseYear = form.value.present_course_year;
    const modeOfStudy = form.value.mode_of_study;
    const classStartDate = form.value.class_start_date;
    const universityName = form.value.university_name;
    const previousCourse = form.value.previous_course;
    const previousPassingYear = form.value.previous_passing_year;
    const previousClassPercentage = form.value.previous_class_percentage;
    const rollNoTenth = form.value.roll_no_tenth;
    const boardNameTenth = form.value.board_name_tenth;
    const passingYearTenth = form.value.passing_year_tenth;
    const marksTenth = form.value.marks_tenth;
    const rollNoTwelth = form.value.roll_no_twelth;
    const boardNameTwelth = form.value.board_name_twelth;
    const passingYearTwelth = form.value.passing_year_twelth;
    const marksTwelth = form.value.marks_twelth;
    const admissionFee = form.value.admissionFee;
    const tuitionFee = form.value.tuitionFee;
    const otherFee = form.value.otherFee;
    const accountNo = form.value.accountNo;
    const bankName = form.value.bankName;
    const ifscCode = form.value.marks_tenth;
    const email:string = JSON.parse(localStorage.getItem('applicationDetails')).email;
    const role: string = JSON.parse(localStorage.getItem('applicationDetails')).role;
    const roleId: number= 4
    const password: string= "abc@123"
    const studentId: number= JSON.parse(localStorage.getItem('applicationDetails')).personalId;
    const instituteApprovalStatus: boolean= false;
    const nadalApprovalStatus: boolean= false;
    const ministryApprovalStatus: boolean= false;
    const studentName: string= JSON.parse(localStorage.getItem('applicationDetails')).studentName;
    const studentDOB: Date= JSON.parse(localStorage.getItem('applicationDetails')).studentDOB;
    const studentGender: string= JSON.parse(localStorage.getItem('applicationDetails')).studentGender;
    const studentDistrict: string= JSON.parse(localStorage.getItem('applicationDetails')).studentDistrict;
    const studentMobileNo: number= JSON.parse(localStorage.getItem('applicationDetails')).studentMobileNo;
    const studentEmail: string= JSON.parse(localStorage.getItem('applicationDetails')).studentEmail;
    const studentaadhar: string= JSON.parse(localStorage.getItem('applicationDetails')).studentaadhar;
    const studentState: string= JSON.parse(localStorage.getItem('applicationDetails')).studentState;
    const instituteCode: number= JSON.parse(localStorage.getItem('instituteDetails')).personalId;
    
    this.isLoading = true;



    this.http.post('http://localhost:8585/studentApplication',

      {

        email,password,role,roleId,studentName,studentDOB,studentGender,studentMobileNo,studentEmail,studentaadhar,studentState,studentDistrict,instituteName, presentCourse, presentCourseYear, modeOfStudy, classStartDate, universityName, previousCourse, previousPassingYear, previousClassPercentage, rollNoTenth, boardNameTenth, passingYearTenth, marksTenth, rollNoTwelth, boardNameTwelth, passingYearTwelth, marksTwelth, admissionFee, tuitionFee, otherFee, community, religion, fatherName, motherName, isDisabled, typeOfDisability, fatherProfession, motherProfession, fatherIncome, maritalStatus, locality, city, state, pincode,accountNo,bankName,ifscCode,studentId,instituteApprovalStatus,nadalApprovalStatus,ministryApprovalStatus,instituteCode

      }


    ).subscribe(respnseDate => {

      console.log(respnseDate);
      this.isLoading = false;

    });

    this.toApply = !this.toApply;
    this.isApplied = true;



    form.reset();


  }


 

}

