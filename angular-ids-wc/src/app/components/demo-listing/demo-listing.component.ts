import { Component, AfterViewInit, ElementRef, ViewChild, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-listing',
  templateUrl: './demo-listing.component.html',
  styleUrls: ['./demo-listing.component.css']
})
export class DemoListingComponent implements AfterViewInit {
  @ViewChild('table', { read: ElementRef }) table;
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
      formatter: this.table?.nativeElement?.formatters?.hyperlink,
      href: `${this.router.url}/{{value}}`,
    });
    this.columns.push({
      id: 'type',
      name: 'Type',
      field: 'data?.type',
      sortable: true,
      formatter: this.table?.nativeElement?.formatters?.text
    });
    this.columns.push({
      id: 'description',
      name: 'Description',
      field: 'data?.description',
      sortable: true,
      formatter: this.table?.nativeElement?.formatters?.text
    });

    this.table.nativeElement.columns = this.columns;
    this.table.nativeElement.data = this.routes;
  }

  @HostListener('document:click', ['$event'])
  public handleClick(event: Event): void {
    event.preventDefault();
    const element = event.target as HTMLAnchorElement | any;
    if (element.shadowRoot) {
      const path = event.composedPath().filter((p: any) => p.tagName === 'IDS-HYPERLINK');
      const route = (path[0] as HTMLAnchorElement)?.href;
      if (route) {
        this.router.navigateByUrl(`/${route}`);
      }
    }
  }
}
