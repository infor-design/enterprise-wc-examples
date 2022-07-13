import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsAccordion from 'ids-enterprise-wc/components/ids-accordion/ids-accordion.js';

@Component({
  selector: 'app-ids-accordion-example',
  templateUrl: './ids-accordion-example.component.html',
  styleUrls: ['./ids-accordion-example.component.css']
})
export class IdsAccordionExampleComponent implements AfterViewInit {
  @ViewChild('exampleAccordion', { read: ElementRef }) accordion: IdsAccordion;

  constructor() {}

  ngAfterViewInit (): void {
    console.log('Values on ngAfterViewInit():');
    console.log('example:', this.accordion.nativeElement);
  }

}
