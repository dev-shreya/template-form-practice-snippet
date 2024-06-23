import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css',
    standalone:true,
    imports:[FormsModule]
})
export class HeaderComponent{
  @ViewChild('f') signupForm !: NgForm;
    defaultGender='';
    answer='';
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
    }
}