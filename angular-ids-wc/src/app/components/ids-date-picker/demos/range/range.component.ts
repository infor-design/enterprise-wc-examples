import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements AfterViewInit {
  @ViewChild('rangePickerSettings', { read: ElementRef }) rangePickerSettings;
  @ViewChild('rangePickerForward', { read: ElementRef }) rangePickerForward;
  @ViewChild('rangePickerBackward', { read: ElementRef }) rangePickerBackward;
  @ViewChild('rangePickerMax', { read: ElementRef }) rangePickerMax;
  @ViewChild('rangePickerMin', { read: ElementRef }) rangePickerMin;
  @ViewChild('rangePickerNotIncluded', { read: ElementRef }) rangePickerNotIncluded;
  @ViewChild('rangePickerIncluded', { read: ElementRef }) rangePickerIncluded;
  @ViewChild('rangePickerLegend', { read: ElementRef }) rangePickerLegend;
  @ViewChild('rangePickerWeek', { read: ElementRef }) rangePickerWeek;

  constructor() { }

  ngAfterViewInit(): void {
    // Example to set start/end of the range via component settings
    this.rangePickerSettings.nativeElement.rangeSettings = {
      start: '2/5/2018',
      end: '2/28/2018'
    };
  
    // Example range selection forward
    this.rangePickerForward.nativeElement.rangeSettings = {
      selectForward: true
    };
  
    // Example range selection backward
    this.rangePickerBackward.nativeElement.rangeSettings = {
      selectBackward: true
    };
  
    // Example range max days
    this.rangePickerMax.nativeElement.rangeSettings = {
      maxDays: 2
    };
  
    // Example range min days
    this.rangePickerMin.nativeElement.rangeSettings = {
      minDays: 5
    };
  
    // Example week picker
    this.rangePickerWeek.nativeElement.rangeSettings = {
      selectWeek: true
    };
  
    // Example range disabled not included
    this.rangePickerNotIncluded.nativeElement.rangeSettings = {
      start: '2/5/2018',
      end: '2/28/2018'
    };
    this.rangePickerNotIncluded.nativeElement.disable = {
      dates: ['2/7/2018', '2/9/2018', '2/10/2018', '2/11/2018']
    };
  
    // Example range disabled included
    this.rangePickerIncluded.nativeElement.rangeSettings = {
      start: '2/5/2018',
      end: '2/28/2018',
      includeDisabled: true
    };
    this.rangePickerIncluded.nativeElement.disable = {
      dates: ['2/7/2018', '2/9/2018', '2/10/2018', '2/11/2018']
    };
  
    // Example range with disabled and legend
    this.rangePickerLegend.nativeElement.rangeSettings = {
      start: '2/5/2018',
      end: '2/28/2018'
    };
    this.rangePickerLegend.nativeElement.disable = {
      dates: ['2/7/2018', '2/9/2018', '2/10/2018', '2/11/2018']
    };
    this.rangePickerLegend.nativeElement.legend = [
      { name: 'Weekends', color: 'amber-60', dayOfWeek: [0, 6] },
      {
        name: 'Other',
        color: 'ruby-30',
        dates: ['2/8/2018', '2/9/2018', '2/23/2018'],
      },
      {
        name: 'Half Days',
        color: 'amethyst-60',
        dates: ['2/21/2018', '1/22/2018'],
      },
      { name: 'Full Days', color: 'azure-30', dates: ['2/24/2018', '2/25/2018'] },
    ];

  }

  handleRangeSelected(e: any) {
    console.info('Range Selected', e.detail.rangeStart, e.detail.rangeEnd);
  }
}