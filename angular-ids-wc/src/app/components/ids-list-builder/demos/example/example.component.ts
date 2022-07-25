import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import bikesJSON from '../../../../assets/data/bikes.js';
import IdsListBuilder from 'ids-enterprise-wc/components/ids-list-builder/ids-list-builder.js'

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('listBuilder', { read: ElementRef }) listBuilder: IdsListBuilder;

  constructor() { }

  ngAfterViewInit(): void {
    this.listBuilder.nativeElement.defaultTemplate = '<ids-text font-size="16" type="span">${manufacturerName}</ids-text>';
    this.listBuilder.nativeElement.data = bikesJSON;
  }
}
