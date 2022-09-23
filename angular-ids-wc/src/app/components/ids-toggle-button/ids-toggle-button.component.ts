import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-toggle-button-routing.module';

@Component({
  selector: 'app-ids-toggle-button',
  templateUrl: './ids-toggle-button.component.html',
  styleUrls: ['./ids-toggle-button.component.css']
})
export class IdsToggleButtonComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Toggle Button init');
  }

}
