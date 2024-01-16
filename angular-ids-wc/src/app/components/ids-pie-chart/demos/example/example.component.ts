import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example-pie-chart',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('pieChartEl', { read: ElementRef }) pieChartEl;

  constructor() { }

  ngOnInit(): void {
    this.loadChartData();
    console.log('ids-pie-chart example init');
  }

  private async loadChartData() {
    const res = await fetch('/api/items-single.json');
    const data = await res.json();
    this.pieChartEl.nativeElement.data = { ...data };
  }

}
