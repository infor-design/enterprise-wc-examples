import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-checkbox-group-routing.module';

@Component({
  selector: 'app-ids-checkbox-group',
  templateUrl: './ids-checkbox-group.component.html',
  styleUrls: ['./ids-checkbox-group.component.css']
})
export class IdsCheckboxGroupComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Checkbox init');
  }

}
