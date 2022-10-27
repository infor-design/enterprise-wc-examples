import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { routes } from './ids-app-menu-routing.module';

@Component({
  selector: 'app-ids-app-menu',
  templateUrl: './ids-app-menu.component.html',
  styleUrls: ['./ids-app-menu.component.css']
})
export class IdsAppMenuComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids App Menu init');
  }
}
 