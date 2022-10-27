import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-error-page-routing.module';

@Component({
  selector: 'app-ids-error-page',
  templateUrl: './ids-error-page.component.html',
  styleUrls: ['./ids-error-page.component.css']
})
export class IdsErrorPageComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Error Page init');
  }

}
