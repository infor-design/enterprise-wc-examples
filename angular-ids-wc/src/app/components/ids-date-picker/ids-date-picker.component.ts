import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-date-picker-routing.module';

@Component({
  selector: 'app-ids-date-picker',
  templateUrl: './ids-date-picker.component.html',
  styleUrls: ['./ids-date-picker.component.css']
})
export class IdsDatePickerComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Date Picker init');
  }

}
