import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import 'ids-enterprise-wc/components/ids-trigger-field/ids-trigger-field.js';
import IdsDatePicker from 'ids-enterprise-wc/components/ids-date-picker/ids-date-picker.js';

@Component({
  selector: 'app-ids-date-picker-example',
  templateUrl: './ids-date-picker-example.component.html',
  styleUrls: ['./ids-date-picker-example.component.css']
})
export class IdsDatePickerExampleComponent implements AfterViewInit {
  @ViewChild('e2eDatePickerLegend', { read: ElementRef }) 
  e2eDatePickerLegend: IdsDatePicker;

  constructor() { }

  ngAfterViewInit(): void {
    // Seems the internal ids-trigger-field is not defined in time
    // https://github.com/infor-design/enterprise-wc/blob/6a46ceca9636a37eb722f59cc31e382240d3aec6/src/components/ids-date-picker/ids-date-picker.ts#L83
    console.log(this.e2eDatePickerLegend.nativeElement);
  }

}
