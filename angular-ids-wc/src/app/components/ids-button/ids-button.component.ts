import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { routes } from './ids-button-routing.module';

@Component({
  selector: 'app-ids-button',
  templateUrl: './ids-button.component.html',
  styleUrls: ['./ids-button.component.css']
})
export class IdsButtonComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Button init');
  }

}
