import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-switch-routing.module';

@Component({
  selector: 'app-ids-switch',
  templateUrl: './ids-switch.component.html',
  styleUrls: ['./ids-switch.component.css']
})
export class IdsSwitchComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Switch init');
  }

}
