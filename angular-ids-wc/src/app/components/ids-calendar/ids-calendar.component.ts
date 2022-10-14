import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-calendar-routing.module';

@Component({
  selector: 'app-ids-calendar',
  templateUrl: './ids-calendar.component.html',
  styleUrls: ['./ids-calendar.component.css']
})
export class IdsCalendarComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsCalendar example AfterViewInit');
  }

}
