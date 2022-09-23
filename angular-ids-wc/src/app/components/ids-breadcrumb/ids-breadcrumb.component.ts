import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-breadcrumb-routing.module';

@Component({
  selector: 'app-ids-breadcrumb',
  templateUrl: './ids-breadcrumb.component.html',
  styleUrls: ['./ids-breadcrumb.component.css']
})
export class IdsBreadcrumbComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Breadcrumd init');
  }

}
