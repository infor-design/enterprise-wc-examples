import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-time-picker-routing.module';

@Component({
  selector: 'app-ids-time-picker',
  templateUrl: './ids-time-picker.component.html',
  styleUrls: ['./ids-time-picker.component.css']
})
export class IdsTimePickerComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Time Picker init');
  }

}
