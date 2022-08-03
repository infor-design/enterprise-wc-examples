import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-dropdown-routing.module';
@Component({
  selector: 'app-ids-dropdown',
  templateUrl: './ids-dropdown.component.html',
  styleUrls: ['./ids-dropdown.component.css']
})
export class IdsDropdownComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Dropdown init');
  }

}
