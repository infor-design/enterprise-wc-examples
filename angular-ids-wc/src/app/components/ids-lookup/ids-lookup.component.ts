import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-lookup-routing.module';

@Component({
  selector: 'app-ids-lookup',
  templateUrl: './ids-lookup.component.html',
  styleUrls: ['./ids-lookup.component.css']
})
export class IdsLookupComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Lookup init');
  }

}
