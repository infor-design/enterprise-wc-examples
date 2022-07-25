import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

import IdsListView from 'ids-enterprise-wc/components/ids-list-view/ids-list-view';
import products100JSON from '../../../../assets/data/products-100.js';

@Component({
  selector: 'app-selectable-single',
  templateUrl: './selectable-single.component.html',
  styleUrls: ['./selectable-single.component.css']
})
export class SelectableSingleComponent implements AfterViewInit {
  @ViewChild('listView', { read: ElementRef }) listView: IdsListView;
  template = '<ids-text font-size="16" type="h2">${productName}</ids-text><ids-text font-size="12" type="span">Count: ${units}</ids-text><ids-text font-size="12" type="span">Price: $ ${unitPrice}</ids-text>';

  constructor() { }

  ngAfterViewInit(): void {
    this.listView.nativeElement.defaultTemplate = this.template;
    this.listView.nativeElement.data = products100JSON;
  }

}
