import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-tooltip-routing.module';

@Component({
  selector: 'app-ids-tooltip',
  templateUrl: './ids-tooltip.component.html',
  styleUrls: ['./ids-tooltip.component.css']
})
export class IdsTooltipComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Tooltip init');
  }

}
