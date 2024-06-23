import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[HeaderComponent,FormsModule]
})
export class AppComponent {
  constructor() {
    console.log('AppComponent initialized');
  }
}
