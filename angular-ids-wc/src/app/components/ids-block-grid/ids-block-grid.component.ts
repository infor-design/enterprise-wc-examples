import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-block-grid-routing.module';

@Component({
  selector: 'app-ids-block-grid',
  templateUrl: './ids-block-grid.component.html',
  styleUrls: ['./ids-block-grid.component.css']
})
export class IdsBlockGridComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsBlockGridComponent AfterViewInit');
  }

}
