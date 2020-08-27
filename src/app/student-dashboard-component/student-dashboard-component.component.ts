import { Component, OnInit } from '@angular/core';
import { AuthResponseData } from "../login-component/student-auth.service";

@Component({
  selector: 'app-student-dashboard-component',
  templateUrl: './student-dashboard-component.component.html',
  styleUrls: ['./student-dashboard-component.component.css']
})
export class StudentDashboardComponentComponent implements OnInit {


  AuthResponseData;
  constructor() { }

  ngOnInit(): void {
  }

}
