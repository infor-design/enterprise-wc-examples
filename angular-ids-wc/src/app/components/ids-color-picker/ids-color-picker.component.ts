import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-color-picker-routing.module';

@Component({
  selector: 'app-ids-color-picker',
  templateUrl: './ids-color-picker.component.html',
  styleUrls: ['./ids-color-picker.component.css']
})
export class IdsColorPickerComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Color Picker init');
  }

}
