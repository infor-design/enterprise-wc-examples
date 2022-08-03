import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-swaplist-routing.module';

@Component({
  selector: 'app-ids-swaplist',
  templateUrl: './ids-swaplist.component.html',
  styleUrls: ['./ids-swaplist.component.css']
})
export class IdsSwaplistComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');
  public columns = [];

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Swaplist init');
  }

}
