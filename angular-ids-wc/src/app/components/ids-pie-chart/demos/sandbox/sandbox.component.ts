import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sandbox-pie-chart',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  @ViewChild('pieChartEl', { read: ElementRef }) pieChartEl;
  @ViewChild('legendPlacementRadioGroupEl', { read: ElementRef }) legendPlacementRadioGroupEl;

  constructor() { }

  public model = {
    legendPlacement: 'none'
  }

  public legendPlacements = [
    { val: 'none', text: 'None' },
    { val: 'top', text: 'Top' },
    { val: 'left', text: 'Left' },
    { val: 'bottom', text: 'Bottom' },
    { val: 'right', text: 'Right' },
  ];

  ngOnInit(): void {
    this.loadChartData();
    console.log('ids-pie-chart sandbox init');
  }

  private async loadChartData() {
    const res = await fetch('/api/items-single.json');
    const data = await res.json();
    this.pieChartEl.nativeElement.data = { ...data };
  }

  handleRadioGroupChange(e: CustomEvent) {
    console.info(`Pie Chart Legend location changed to "${e.detail.value}"`);
    this.pieChartEl.nativeElement.legendPlacement = e.detail.value;
  }
}
