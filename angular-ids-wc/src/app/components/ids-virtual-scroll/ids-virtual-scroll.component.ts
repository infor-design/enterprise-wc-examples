import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-virtual-scroll-routing.module';

@Component({
  selector: 'app-ids-virtual-scroll',
  templateUrl: './ids-virtual-scroll.component.html',
  styleUrls: ['./ids-virtual-scroll.component.css']
})
export class IdsVirtualScrollComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Virtual Scroll init');
  }

}
