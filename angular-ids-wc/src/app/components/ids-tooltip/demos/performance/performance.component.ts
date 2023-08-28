import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit, AfterViewInit {
  @ViewChild('layoutGrid', { read: ElementRef }) layoutGrid;
  public times = [];

  constructor() { }

  ngOnInit(): void {
    console.log('IdsTooltip performance OnInit');
  }

  ngAfterViewInit(): void {
    this.appendTestItems();
  }

  appendTestItems = () => {
    for (let j = 0; j < 9; j++) {
      const t0 = performance.now();
      this.layoutGrid.nativeElement.innerHTML = '';
      for (let index = 0; index < 1000; index++) {
        let html = '';
        html += `<ids-layout-grid-cell>
        <ids-button id="button-${index}" appearance="secondary" tooltip="Tooltip ${index}">Button ${index}</ids-button>
        </ids-layout-grid-cell>`;
        this.layoutGrid.nativeElement.insertAdjacentHTML('beforeend', html);
      }
      const t1 = performance.now();
      console.info('Loading Time:', t1 - t0);
      this.times.push(t1 - t0);
    }
  };
}
