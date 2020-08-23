import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-officer-login-component',
  templateUrl: './officer-login-component.component.html',
  styleUrls: ['./officer-login-component.component.css']
})
export class OfficerLoginComponentComponent{



onSubmit(form:NgForm){

console.log(form.value);
form.reset();

}


}
