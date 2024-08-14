import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import productsJson from '../../../../../api/products.json';

@Component({
  selector: 'app-example-list-view',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements AfterViewInit {
  @ViewChild('listView', { read: ElementRef }) listView;
  @ViewChild('listView1', { read: ElementRef }) listView1;
  @ViewChild('virtualScroll', { read: ElementRef }) virtualScroll;
  template = '<ids-text font-size="16" type="h2">${productName}</ids-text><ids-text font-size="12" type="span">Count: ${units}</ids-text><ids-text font-size="12" type="span">Price: $ ${unitPrice}</ids-text>'

  constructor() { }

  ngAfterViewInit(): void {
    this.listView.nativeElement.defaultTemplate = this.template;
    this.listView.nativeElement.data = productsJson;

    this.virtualScroll.nativeElement.itemTemplate = (item: any) => `<ids-list-view-item><ids-text font-size="16" type="h2">${item.productName}</ids-text><ids-text font-size="12" type="span">Count: ${item.units}</ids-text><ids-text font-size="12" type="span">Price: $ ${item.unitPrice}</ids-text></ids-list-view-item>`;
    this.virtualScroll.nativeElement.scrollTarget = document.querySelector('#demo-lv-virtual-scroll2')?.shadowRoot?.querySelector('.ids-list-view');
    this.virtualScroll.nativeElement.data = productsJson;
  }
}
