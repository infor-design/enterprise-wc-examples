import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-data-grid-routing.module';

@Component({
  selector: 'app-ids-data-grid',
  templateUrl: './ids-data-grid.component.html',
  styleUrls: ['./ids-data-grid.component.css']
})
export class IdsDataGridComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsDataGrid AfterViewInit');
  }

}
