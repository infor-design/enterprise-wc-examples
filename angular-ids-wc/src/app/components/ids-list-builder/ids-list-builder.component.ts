import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-list-builder-routing.module';

@Component({
  selector: 'app-ids-list-builder',
  templateUrl: './ids-list-builder.component.html',
  styleUrls: ['./ids-list-builder.component.css']
})
export class IdsListBuilderComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids List Builder init');
  }

}
