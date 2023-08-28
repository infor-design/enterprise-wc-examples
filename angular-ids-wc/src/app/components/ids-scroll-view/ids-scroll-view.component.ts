import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-scroll-view-routing.module';

@Component({
  selector: 'app-ids-scroll-view',
  templateUrl: './ids-scroll-view.component.html',
  styleUrls: ['./ids-scroll-view.component.css']
})
export class IdsScrollViewComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Scroll View init');
  }
}
