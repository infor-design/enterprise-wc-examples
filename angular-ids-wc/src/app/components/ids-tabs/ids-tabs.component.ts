import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-tabs-routing.module';

@Component({
  selector: 'app-ids-tabs',
  templateUrl: './ids-tabs.component.html',
  styleUrls: ['./ids-tabs.component.css']
})
export class IdsTabsComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Tabs init');
  }

}
