import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';

@Component({
  selector: 'app-demo-listing',
  templateUrl: './demo-listing.component.html',
  styleUrls: ['./demo-listing.component.css']
})
export class DemoListingComponent implements AfterViewInit {
  @ViewChild('table', { read: ElementRef }) table: IdsDataGrid;
  public columns = [];
  @Input() routes: any;
  @Input() title: any;

  constructor(
    public router: Router
  ) {}

  ngAfterViewInit(): void {
    this.columns.push({
      id: 'name',
      name: 'Name',
      field: 'path',
      href: `${this.router.url}/{{value}}`,
      sortable: true,
      formatter: this.table.nativeElement.formatters.hyperlink
    });
    this.columns.push({
      id: 'type',
      name: 'Type',
      field: 'data',
      sortable: true,
      formatter: this.table.nativeElement.formatters.text
    });
    this.columns.push({
      id: 'description',
      name: 'Description',
      field: 'data',
      sortable: true,
      formatter: this.table.nativeElement.formatters.text
    });

    this.table.nativeElement.columns = this.columns;
    this.table.nativeElement.data = this.routes;
  }

}
