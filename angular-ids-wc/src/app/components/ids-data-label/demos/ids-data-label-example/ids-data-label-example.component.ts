import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import IdsDataLabel from 'ids-enterprise-wc/components/ids-data-label/ids-data-label';

@Component({
  selector: 'app-ids-data-label-example',
  templateUrl: './ids-data-label-example.component.html',
  styleUrls: ['./ids-data-label-example.component.css']
})
export class IdsDataLabelExampleComponent implements AfterViewInit {
  @ViewChild('dataLabelLabelLeft', { read: ElementRef }) dataLabelLabelLeft: IdsDataLabel;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.dataLabelLabelLeft.nativeElement);
  }

}
