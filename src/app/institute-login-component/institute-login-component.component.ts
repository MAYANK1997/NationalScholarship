import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-institute-login-component',
  templateUrl: './institute-login-component.component.html',
  styleUrls: ['./institute-login-component.component.css']
})
export class InstituteLoginComponentComponent {

 
onSubmit(form:NgForm){

  console.log(form.value);
  
  form.reset();
  }

}
