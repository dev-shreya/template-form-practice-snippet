import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: ``,
// })
// export class App {
//   name = 'Angular';
// }

bootstrapApplication(AppComponent) .catch(err => console.error(err));

