import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css',
    standalone:true,
    imports:[FormsModule]
})
export class HeaderComponent{
    defaultGender='';
    onSubmit(form:NgForm){
      console.log(form)
    }
}