import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-spinbox-routing.module';

@Component({
  selector: 'app-ids-spinbox',
  templateUrl: './ids-spinbox.component.html',
  styleUrls: ['./ids-spinbox.component.css']
})
export class IdsSpinboxComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Spinbox init');
  }

}
