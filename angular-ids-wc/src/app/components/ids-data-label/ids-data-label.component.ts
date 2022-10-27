import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { routes } from './ids-data-label-routing.module';

@Component({
  selector: 'app-ids-data-label',
  templateUrl: './ids-data-label.component.html',
  styleUrls: ['./ids-data-label.component.css']
})
export class IdsDataLabelComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Data Label init');
  }

}
