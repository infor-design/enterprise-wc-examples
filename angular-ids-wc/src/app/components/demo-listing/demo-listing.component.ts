import { Component, AfterViewInit, ElementRef, ViewChild, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';

@Component({
  selector: 'app-demo-listing',
  templateUrl: './demo-listing.component.html',
  styleUrls: ['./demo-listing.component.css']
})
export class DemoListingComponent implements AfterViewInit {
  @ViewChild('table', { read: ElementRef }) table: IdsDataGrid;
  @Input() routes: any;
  @Input() title: any;
  public columns = [];
  
  constructor(
    public router: Router
  ) {}

  ngAfterViewInit(): void {
    this.columns.push({
      id: 'name',
      name: 'Name',
      field: 'path',
      sortable: true,
      formatter: this.table.nativeElement.formatters.hyperlink,
      href: `${this.router.url}/{{value}}`,
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

  @HostListener('document:click', ['$event'])
  public handleClick(event: Event): void {
    event.preventDefault();
    const element = event.target as HTMLAnchorElement;
    if (element.shadowRoot) {
      const route = element?.shadowRoot?.querySelector('ids-hyperlink').shadowRoot?.querySelector('a')?.getAttribute('href');
      if (route) {
        this.router.navigateByUrl(`/${route}`);
      }
    }
  }

}
