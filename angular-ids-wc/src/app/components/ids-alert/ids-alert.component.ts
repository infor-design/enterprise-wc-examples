import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { routes } from './ids-alert-routing.module';

@Component({
  selector: 'app-ids-alert',
  templateUrl: './ids-alert.component.html',
  styleUrls: ['./ids-alert.component.css']
})
export class IdsAlertComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Alert init');
  }

}
