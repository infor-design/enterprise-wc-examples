import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { routes } from '../../app-routing.module';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  public routes = routes;

  ngAfterViewInit() {
    console.log('Homepage init');
  }
}
