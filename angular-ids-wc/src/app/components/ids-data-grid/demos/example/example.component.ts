import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('dataGrid', { read: ElementRef }) dataGrid;
  public columns = [];

  constructor(
    private dataService: DataService
  ) { }

  ngAfterViewInit(): void {
    // Set up columns
    this.columns.push({
      id: 'selectionCheckbox',
      name: 'selection',
      sortable: false,
      resizable: false,
      formatter: this.dataGrid.nativeElement.formatters.selectionCheckbox,
      align: 'center'
    });
    this.columns.push({
      id: 'rowNumber',
      name: '#',
      formatter: this.dataGrid.nativeElement.formatters.rowNumber,
      sortable: false,
      readonly: true,
      width: 65
    });
    this.columns.push({
      id: 'description',
      name: 'Description',
      field: 'description',
      sortable: true,
      formatter: this.dataGrid.nativeElement.formatters.text,
      filterType: this.dataGrid.nativeElement.filters.text
    });
    this.columns.push({
      id: 'ledger',
      name: 'Ledger',
      field: 'ledger',
      formatter: this.dataGrid.nativeElement.formatters.text,
      filterType: this.dataGrid.nativeElement.filters.text
    });
    this.columns.push({
      id: 'publishDate',
      name: 'Pub. Date',
      field: 'publishDate',
      formatter: this.dataGrid.nativeElement.formatters.date
    });
    this.columns.push({
      id: 'publishTime',
      name: 'Pub. Time',
      field: 'publishDate',
      formatter: this.dataGrid.nativeElement.formatters.time
    });
    this.columns.push({
      id: 'price',
      name: 'Price',
      field: 'price',
      formatter: this.dataGrid.nativeElement.formatters.decimal,
      formatOptions: { locale: 'en-US' } // Data Values are in en-US
    });
    this.columns.push({
      id: 'bookCurrency',
      name: 'Currency',
      field: 'bookCurrency',
      formatter: this.dataGrid.nativeElement.formatters.text,
      filterType: this.dataGrid.nativeElement.filters.text
    });
    this.columns.push({
      id: 'transactionCurrency',
      name: 'Transaction Currency',
      field: 'transactionCurrency',
      formatter: this.dataGrid.nativeElement.formatters.text,
      filterType: this.dataGrid.nativeElement.filters.text
    });
    this.columns.push({
      id: 'integer',
      name: 'Price (Int)',
      field: 'price',
      formatter: this.dataGrid.nativeElement.formatters.integer,
      formatOptions: { locale: 'en-US' } // Data Values are in en-US
    });
    this.columns.push({
      id: 'location',
      name: 'Location',
      field: 'location',
      formatter: this.dataGrid.nativeElement.formatters.hyperlink,
      href: '#'
    });
    this.columns.push({
      id: 'postHistory',
      name: 'Post History',
      field: 'postHistory',
      formatter: this.dataGrid.nativeElement.formatters.text,
      filterType: this.dataGrid.nativeElement.filters.text
    });
    this.columns.push({
      id: 'active',
      name: 'Active',
      field: 'active',
      formatter: this.dataGrid.nativeElement.formatters.text,
      filterType: this.dataGrid.nativeElement.filters.text
    });
    this.columns.push({
      id: 'convention',
      name: 'Convention',
      field: 'convention',
      formatter: this.dataGrid.nativeElement.formatters.text,
      filterType: this.dataGrid.nativeElement.filters.text
    });
    this.columns.push({
      id: 'methodSwitch',
      name: 'Method Switch',
      field: 'methodSwitch',
      formatter: this.dataGrid.nativeElement.formatters.text,
      filterType: this.dataGrid.nativeElement.filters.text
    });
    this.columns.push({
      id: 'trackDeprecationHistory',
      name: 'Track Deprecation History',
      field: 'trackDeprecationHistory',
      formatter: this.dataGrid.nativeElement.formatters.dropdown
    });
    this.columns.push({
      id: 'useForEmployee',
      name: 'Use For Employee',
      field: 'useForEmployee',
      formatter: this.dataGrid.nativeElement.formatters.password
    });
    this.columns.push({
      id: 'deprecationHistory',
      name: 'Deprecation History',
      field: 'deprecationHistory',
      formatter: this.dataGrid.nativeElement.formatters.text
    });

    this.dataService.getJsonData('books')
      .subscribe(res => {
        this.dataGrid.nativeElement.columns = this.columns;
        this.dataGrid.nativeElement.data = res;
      })
  }

}
