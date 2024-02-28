import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example-date-picker',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('datePickerLegend', { read: ElementRef }) datePickerLegend;

  constructor() { }

  ngAfterViewInit(): void {
    this.datePickerLegend.nativeElement.legend = [
      {
        name: 'Public Holiday',
        color: 'green-60',
        dates: ['12/31/2021', '12/24/2021', '1/1/2022'],
      },
      { name: 'Weekends', color: 'orange-60', dayOfWeek: [0, 6] },
      {
        name: 'Other',
        color: 'red-30',
        dates: ['1/8/2022', '1/9/2022', '1/23/2022'],
      },
      {
        name: 'Half Days',
        color: 'purple-60',
        dates: ['1/21/2022', '1/22/2022'],
      },
      { name: 'Full Days', color: 'blue-30', dates: ['1/24/2022', '1/25/2022'] },
    ];
  }

}
