import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';




@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

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
  instituteApprovalStatus: string = "Pending";
  nodalOfficerApprovalStatus: string = "Pending";
  ministryOfficerApprovalStatus: string = "Pending";



  constructor(private http: HttpClient, private router: Router) { }

  apply() {
    this.toApply = !this.toApply;

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
    let email:string = JSON.parse(localStorage.getItem('applicationDetails')).email;
    let role: string = JSON.parse(localStorage.getItem('applicationDetails')).role;
    let roleId: number= JSON.parse(localStorage.getItem('applicationDetails')).roleId;
    let password: string= JSON.parse(localStorage.getItem('applicationDetails')).password;
    let studentId: number= JSON.parse(localStorage.getItem('applicationDetails')).studentId;
    let instituteApprovalStatus: boolean= JSON.parse(localStorage.getItem('applicationDetails')).instituteApprovalStatus;
    let nadalApprovalStatus: boolean= JSON.parse(localStorage.getItem('applicationDetails')).nadalApprovalStatus;
    let ministryApprovalStatus: boolean= JSON.parse(localStorage.getItem('applicationDetails')).ministryApprovalStatus;
    let studentName: string= JSON.parse(localStorage.getItem('applicationDetails')).studentName;
    let studentDOB: Date= JSON.parse(localStorage.getItem('applicationDetails')).studentDOB;
    let studentGender: string= JSON.parse(localStorage.getItem('applicationDetails')).studentGender;
    let studentDistrict: string= JSON.parse(localStorage.getItem('applicationDetails')).studentDistrict;
    let studentMobileNo: number= JSON.parse(localStorage.getItem('applicationDetails')).studentMobileNo;
    let studentEmail: string= JSON.parse(localStorage.getItem('applicationDetails')).studentEmail;
    let studentaadhar: string= JSON.parse(localStorage.getItem('applicationDetails')).studentaadhar;
    let studentState: string= JSON.parse(localStorage.getItem('applicationDetails')).studentState;
    let instituteCode: number= 10121;
    
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

