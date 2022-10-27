import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-checkbox-routing.module';

@Component({
  selector: 'app-ids-checkbox',
  templateUrl: './ids-checkbox.component.html',
  styleUrls: ['./ids-checkbox.component.css']
})
export class IdsCheckboxComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Checkbox init');
  }

}
