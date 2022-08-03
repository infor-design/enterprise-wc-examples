import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-badge-routing.module';

@Component({
  selector: 'app-ids-badge',
  templateUrl: './ids-badge.component.html',
  styleUrls: ['./ids-badge.component.css']
})
export class IdsBadgeComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Badge init');
  }

}
