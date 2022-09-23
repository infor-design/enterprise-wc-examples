import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-popup-routing.module';

@Component({
  selector: 'app-ids-popup',
  templateUrl: './ids-popup.component.html',
  styleUrls: ['./ids-popup.component.css']
})
export class IdsPopupComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Popup init');
  }

}
