import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import bikesJSON from '../../../../../api/bikes.json';
@Component({
  selector: 'app-selection-multiple',
  templateUrl: './selection-multiple.component.html',
  styleUrls: ['./selection-multiple.component.css']
})
export class SelectionMultipleComponent implements AfterViewInit {
  @ViewChild('listBuilder', { read: ElementRef }) listBuilder;

  constructor() { }

  ngAfterViewInit(): void {
    this.listBuilder.nativeElement.defaultTemplate = '<ids-text font-size="16" type="span">${manufacturerName}</ids-text>';
    this.listBuilder.nativeElement.data = bikesJSON;
  }

}
