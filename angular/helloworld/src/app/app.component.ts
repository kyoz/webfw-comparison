import { Component } from '@angular/core';
import * as iquotes from 'iquotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  quotes = [];

  constructor() {
    this.quotes = iquotes.all();
  }
}
