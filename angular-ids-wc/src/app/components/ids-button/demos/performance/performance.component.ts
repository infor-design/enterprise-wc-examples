import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit, AfterViewInit {
  @ViewChild('section', { read: ElementRef }) section;

  constructor() { }

  ngOnInit(): void {
    console.log('ids-button performance OnInit');
  }

  ngAfterViewInit(): void {
    this.appendTestItems();
    console.info('Loading Time:', window.performance.now());
  }

  appendTestItems = () => {
    for (let index = 0; index < 1000; index++) {
      let html = '';
      html += `<ids-layout-grid-cell>
      <ids-button id="button-${index}" appearance="secondary">Button ${index}</ids-button>
      </ids-layout-grid-cell>`;
      this.section.nativeElement.insertAdjacentHTML('beforeend', html);
    }
  };
}
