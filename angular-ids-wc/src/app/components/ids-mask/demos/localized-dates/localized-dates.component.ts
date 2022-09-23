import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-localized-dates',
  templateUrl: './localized-dates.component.html',
  styleUrls: ['./localized-dates.component.css']
})
export class LocalizedDatesComponent implements OnInit, AfterViewInit {
  @ViewChild('pageContainer', { read: ElementRef }) pageContainer; 
  @ViewChild('maskDateShort', { read: ElementRef }) maskDateShort;
  @ViewChild('maskDateTime', { read: ElementRef }) maskDateTime;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMask localized-dates OnInit');
  }

  ngAfterViewInit(): void {
    const calendar = this.pageContainer.nativeElement.locale.calendar();

    // Configure Short Date input
    this.maskDateShort.nativeElement.mask = 'date';
    this.maskDateShort.nativeElement.placeholder = this.maskDateShort.nativeElement.maskOptions.format;

    // The default date format absorbed by the Mask Mixin from IdsLocale is "short".
    // For the timestamp field, we have to manually override the format set by the mixin.
    this.maskDateTime.nativeElement.mask = 'date';
    this.maskDateTime.nativeElement.maskOptions = {
      format: calendar.dateFormat.timestamp
    };
    this.maskDateTime.nativeElement.placeholder = this.maskDateTime.nativeElement.maskOptions.format;
  }

  handleLocaleChange() {
    const calendar = this.pageContainer.nativeElement.locale.calendar();
    const shortFormat = calendar.dateFormat.short;
    const timeFormat = calendar.dateFormat.timestamp;

    this.maskDateShort.nativeElement.value = '';
    this.maskDateShort.nativeElement.maskOptions.format = shortFormat;
    this.maskDateShort.nativeElement.placeholder = this.maskDateShort.nativeElement.maskOptions.format;

    this.maskDateTime.nativeElement.value = '';
    this.maskDateTime.nativeElement.maskOptions.format = timeFormat;
    this.maskDateTime.nativeElement.placeholder = this.maskDateTime.nativeElement.maskOptions.format;
  }
}
