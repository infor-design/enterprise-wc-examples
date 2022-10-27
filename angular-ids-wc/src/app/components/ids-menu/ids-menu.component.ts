import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-menu-routing.module';

@Component({
  selector: 'app-ids-menu',
  templateUrl: './ids-menu.component.html',
  styleUrls: ['./ids-menu.component.css']
})
export class IdsMenuComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Menu init');
  }

}
