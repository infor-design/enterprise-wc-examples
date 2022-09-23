import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import IdsDatePicker from 'ids-enterprise-wc/components/ids-date-picker/ids-date-picker';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements AfterViewInit {
  @ViewChild('datePickerAvailable', { read: ElementRef }) datePickerAvailable: IdsDatePicker;

  constructor() { }

  ngAfterViewInit(): void {
    this.datePickerAvailable.nativeElement.disable = {
      dates: ['2/15/2010', '2/25/2010'],
      dayOfWeek: [0, 6]
    };
  }

}
