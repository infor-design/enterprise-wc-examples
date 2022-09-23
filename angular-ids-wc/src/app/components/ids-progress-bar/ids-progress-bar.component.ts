import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-progress-bar-routing.module';

@Component({
  selector: 'app-ids-progress-bar',
  templateUrl: './ids-progress-bar.component.html',
  styleUrls: ['./ids-progress-bar.component.css']
})
export class IdsProgressBarComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Progress init');
  }

}
