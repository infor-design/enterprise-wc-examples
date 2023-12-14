import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router'
import 'ids-enterprise-wc/enterprise-wc.js';

@Component({
  selector: 'app-ids-wc',
  templateUrl: './app.component.html',
  styleUrls: [ 
    './app.component.css'
  ]
})
export class AppComponent {
  public name = 'Angular ' + VERSION.major;
  
  constructor(
    private router: Router
  ) {}
}
