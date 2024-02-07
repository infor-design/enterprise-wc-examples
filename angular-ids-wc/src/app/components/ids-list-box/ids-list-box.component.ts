import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-list-box-routing.module';

@Component({
  selector: 'app-ids-list-box',
  templateUrl: './ids-list-box.component.html',
  styleUrls: ['./ids-list-box.component.css']
})
export class IdsListBoxComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids List Box init');
  }

}
