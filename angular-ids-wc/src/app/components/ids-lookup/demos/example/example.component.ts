import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import booksJSON from '../../../../assets/data/books.js';
import IdsLookup from 'ids-enterprise-wc/components/ids-lookup/ids-lookup.js';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('lookup1', { read: ElementRef }) lookup1: IdsLookup;

  constructor() { }

  ngAfterViewInit(): void {
    const columns = [];

    // Set up columns
    columns.push({
      id: 'selectionCheckbox',
      name: 'selection',
      sortable: false,
      resizable: false,
      formatter: this.lookup1.nativeElement.dataGrid?.formatters.selectionCheckbox,
      align: 'center'
    });
    columns.push({
      id: 'rowNumber',
      name: '#',
      formatter: this.lookup1.nativeElement.dataGrid?.formatters.rowNumber,
      sortable: false,
      readonly: true,
      width: 65
    });
    columns.push({
      id: 'description',
      name: 'Description',
      field: 'description',
      sortable: true,
      formatter: this.lookup1.nativeElement.dataGrid?.formatters.text
    });
    columns.push({
      id: 'ledger',
      name: 'Ledger',
      field: 'ledger',
      formatter: this.lookup1.nativeElement.dataGrid?.formatters.text
    });
    columns.push({
      id: 'price',
      name: 'Price',
      field: 'price',
      formatter: this.lookup1.nativeElement.dataGrid?.formatters.decimal,
      formatOptions: { locale: 'en-US' } // Data Values are in en-US
    });
    columns.push({
      id: 'bookCurrency',
      name: 'Currency',
      field: 'bookCurrency',
      formatter: this.lookup1.nativeElement.dataGrid?.formatters.text
    });

    console.log(booksJSON);
  }
}
