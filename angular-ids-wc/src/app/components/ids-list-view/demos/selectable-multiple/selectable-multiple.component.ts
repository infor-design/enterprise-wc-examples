import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import products100JSON from '../../../../../api/products-100.json';

@Component({
  selector: 'app-selectable-multiple',
  templateUrl: './selectable-multiple.component.html',
  styleUrls: ['./selectable-multiple.component.css']
})
export class SelectableMultipleComponent implements AfterViewInit {
  @ViewChild('listView', { read: ElementRef }) listView;
  template = '<ids-text font-size="16" type="h2">${productName}</ids-text><ids-text font-size="12" type="span">Count: ${units}</ids-text><ids-text font-size="12" type="span">Price: $ ${unitPrice}</ids-text>';

  constructor() { }

  ngAfterViewInit(): void {
    this.listView.nativeElement.defaultTemplate = this.template;
    this.listView.nativeElement.data = products100JSON;
  }

}
