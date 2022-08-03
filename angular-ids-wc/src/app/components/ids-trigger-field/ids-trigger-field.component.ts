import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-trigger-field-routing.module';

@Component({
  selector: 'app-ids-trigger-field',
  templateUrl: './ids-trigger-field.component.html',
  styleUrls: ['./ids-trigger-field.component.css']
})
export class IdsTriggerFieldComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Trigger Field init');
  }

}
