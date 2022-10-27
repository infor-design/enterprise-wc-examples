import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-theme-switcher-routing.module';

@Component({
  selector: 'app-ids-theme-switcher',
  templateUrl: './ids-theme-switcher.component.html',
  styleUrls: ['./ids-theme-switcher.component.css']
})
export class IdsThemeSwitcherComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Theme init');
  }

}
