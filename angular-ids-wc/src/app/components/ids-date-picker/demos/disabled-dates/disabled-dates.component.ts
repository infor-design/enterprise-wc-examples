import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsDatePicker from 'ids-enterprise-wc/components/ids-date-picker/ids-date-picker';

@Component({
  selector: 'app-disabled-dates',
  templateUrl: './disabled-dates.component.html',
  styleUrls: ['./disabled-dates.component.css']
})
export class DisabledDatesComponent implements AfterViewInit {
  @ViewChild('disabledDates', { read: ElementRef }) disabledDates: IdsDatePicker;
  @ViewChild('disabledYears', { read: ElementRef }) disabledYears: IdsDatePicker;
  @ViewChild('disabledMinMax', { read: ElementRef }) disabledMinMax: IdsDatePicker;
  @ViewChild('disabledReverse', { read: ElementRef }) disabledReverse: IdsDatePicker;

  constructor() { }

  ngAfterViewInit(): void {
    this.disabledDates.nativeElement.disable = {
      dates: ['6/9/2015', '6/12/2015'],
      dayOfWeek: [0, 6]
    };
  
    this.disabledYears.nativeElement.disable = {
      years: [2019, 2021, 2030, 2034]
    };
  
    this.disabledMinMax.nativeElement.disable = {
      minDate: '6/3/2020',
      maxDate: '6/25/2020'
    };
  
    this.disabledReverse.nativeElement.disable = {
      minDate: '6/3/2020',
      maxDate: '6/25/2020',
      isEnable: true
    };
  }

}
