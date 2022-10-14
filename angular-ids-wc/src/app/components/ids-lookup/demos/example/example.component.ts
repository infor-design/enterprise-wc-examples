import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/mock/data.service';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('lookup1', { read: ElementRef }) lookup1;

  constructor(
    private dataService: DataService
  ) { }

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

    this.lookup1.nativeElement.columns = columns;

    this.dataService.getJsonData('books')
      .subscribe(res => {
        this.lookup1.nativeElement.data = res;
      });    
  }
}
