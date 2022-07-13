import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsAccordion from 'ids-enterprise-wc/components/ids-accordion/ids-accordion.js';

@Component({
  selector: 'app-ids-accordion-disabled',
  templateUrl: './ids-accordion-disabled.component.html',
  styleUrls: ['./ids-accordion-disabled.component.css']
})
export class IdsAccordionDisabledComponent implements AfterViewInit {
  @ViewChild('disabledAccordion1', { read: ElementRef }) disabledAccordion1: IdsAccordion;
  @ViewChild('disabledAccordion2', { read: ElementRef }) disabledAccordion2: IdsAccordion;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log('disabledAccordion1:', this.disabledAccordion1.nativeElement);
    console.log('disabledAccordion2:', this.disabledAccordion2.nativeElement);
  }
}
