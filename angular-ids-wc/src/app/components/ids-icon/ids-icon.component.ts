import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-icon-routing.module';

@Component({
  selector: 'app-ids-icon',
  templateUrl: './ids-icon.component.html',
  styleUrls: ['./ids-icon.component.css']
})
export class IdsIconComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Icon init');
  }

}
