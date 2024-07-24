import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

import 'ids-enterprise-wc/components/ids-text/ids-text';

@Component({
  selector: 'app-overflow-tabs',
  templateUrl: './overflow.component.html',
  styleUrls: ['./overflow.component.css']
})
export class OverflowComponent implements OnInit, AfterViewInit {
  @ViewChildren('tabElements', { read: ElementRef }) tabElements;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.tabElements.toArray()
      .forEach((el) => el.nativeElement.addEventListener('change', (e: Event | CustomEvent | any) => {
        console.info(`ids-tabs.on('change') =>`, e.target?.value);
      }));
  }

}
