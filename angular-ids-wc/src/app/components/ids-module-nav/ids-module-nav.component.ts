import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { routes } from './ids-module-nav-routing.module';

@Component({
  selector: 'app-ids-module-nav',
  templateUrl: './ids-module-nav.component.html',
  styleUrls: ['./ids-module-nav.component.css']
})
export class IdsModuleNavComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Module Nav init');
  }
}
 