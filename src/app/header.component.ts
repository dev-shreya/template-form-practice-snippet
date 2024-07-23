import { NgIf } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css',
    standalone:true,
    imports:[FormsModule,NgIf]
})
export class HeaderComponent{
  @ViewChild('f') signupForm !: NgForm;
  submitted=false;
    defaultGender='';
    ageGroup=['Below 18','Above 18'];
    defaultAgeGroup = 'Above 18';
    userData={
      email:'',
      password:'',
      gender:'',
      age:''
    }


    onSubmit(form:NgForm){
      console.log(form)
    
      this.userData.email=this.signupForm.value.email;
      this.userData.password=this.signupForm.value.password;
      this.userData.gender=this.signupForm.value.gender;
      this.userData.age=this.signupForm.value.age;
      this.signupForm.reset();
      this.submitted=true;
    }
}