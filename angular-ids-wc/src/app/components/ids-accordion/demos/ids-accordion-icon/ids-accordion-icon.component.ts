import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import IdsAccordion from 'ids-enterprise-wc/components/ids-accordion/ids-accordion.js';

@Component({
  selector: 'app-ids-accordion-icon',
  templateUrl: './ids-accordion-icon.component.html',
  styleUrls: ['./ids-accordion-icon.component.css']
})
export class IdsAccordionIconComponent implements AfterViewInit {
  @ViewChild('iconAccordion', { read: ElementRef }) iconAccordion: IdsAccordion;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log('example:', this.iconAccordion.nativeElement);
  }

}
