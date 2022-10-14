import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-container-routing.module';

@Component({
  selector: 'app-ids-container',
  templateUrl: './ids-container.component.html',
  styleUrls: ['./ids-container.component.css']
})
export class IdsContainerComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsContainer AfterViewInit');
  }

}
