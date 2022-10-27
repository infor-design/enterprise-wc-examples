import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-multiselect-routing.module';

@Component({
  selector: 'app-ids-multiselect',
  templateUrl: './ids-multiselect.component.html',
  styleUrls: ['./ids-multiselect.component.css']
})
export class IdsMultiselectComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Multiselect init');
  }

}
