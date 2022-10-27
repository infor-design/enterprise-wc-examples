import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-search-field-routing.module';

@Component({
  selector: 'app-ids-search-field',
  templateUrl: './ids-search-field.component.html',
  styleUrls: ['./ids-search-field.component.css']
})
export class IdsSearchFieldComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Search Field init');
  }

}
