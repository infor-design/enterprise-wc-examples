import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import IdsAccordion from 'ids-enterprise-wc/components/ids-accordion/ids-accordion.js';

@Component({
  selector: 'app-ids-accordion-nested',
  templateUrl: './ids-accordion-nested.component.html',
  styleUrls: ['./ids-accordion-nested.component.css']
})
export class IdsAccordionNestedComponent implements AfterViewInit {
  @ViewChild('nestedAccordion1', { read: ElementRef }) nestedAccordion1: IdsAccordion;
  @ViewChild('nestedAccordion2', { read: ElementRef }) nestedAccordion2: IdsAccordion;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log('nestedAccordion1:', this.nestedAccordion1.nativeElement);
    console.log('nestedAccordion2:', this.nestedAccordion2.nativeElement);
  }

}
