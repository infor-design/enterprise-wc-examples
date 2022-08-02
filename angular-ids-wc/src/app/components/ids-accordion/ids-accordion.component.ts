import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { routes } from './ids-accordion-routing.module';

@Component({
  selector: 'app-ids-accordion',
  templateUrl: './ids-accordion.component.html',
  styleUrls: ['./ids-accordion.component.css']
})
export class IdsAccordionComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');
  public columns = [];

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Accordion init')
  }

}
