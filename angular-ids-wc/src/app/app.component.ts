import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-ids-wc',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public name = 'Angular ' + VERSION.major;
  
  constructor() {}
}
