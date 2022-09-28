import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-expandable-area-routing.module';

@Component({
  selector: 'app-ids-expandable-area',
  templateUrl: './ids-expandable-area.component.html',
  styleUrls: ['./ids-expandable-area.component.css']
})
export class IdsExpandableAreaComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsExpandableArea AfterViewInit');
  }

}
