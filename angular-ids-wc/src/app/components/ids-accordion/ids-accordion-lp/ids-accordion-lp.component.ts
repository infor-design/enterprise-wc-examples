import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid.js';

@Component({
  selector: 'app-ids-accordion-lp',
  templateUrl: './ids-accordion-lp.component.html',
  styleUrls: ['./ids-accordion-lp.component.css']
})
export class IdsAccordionLpComponent implements AfterViewInit {
  @ViewChild('exampleDatagrid', { read: ElementRef }) exampleDatagrid: IdsDataGrid;
  @Input() children: any;
  public columns = [];

  constructor(public route: ActivatedRoute) {
    route.url.subscribe(() => {
      console.log(route.snapshot.parent.routeConfig.children);
      const childRoutes = route.snapshot.parent.routeConfig.children.filter((c) => c.path !== '');
      this.children = childRoutes;
    });
  }

  ngAfterViewInit(): void {
    this.columns.push({
      id: 'example-name',
      name: 'Example Name',
      field: 'path',
      sortable: false,
      formatter: this.exampleDatagrid.nativeElement.formatters.hyperlink,
      // href: 'ids-accordion/path'
    });

    this.columns.push({
      id: 'example-type',
      name: 'Example Type',
      field: 'data',
      sortable: false,
      formatter: this.exampleDatagrid.nativeElement.formatters.text
    });

    this.columns.push({
      id: 'description',
      name: 'Description',
      field: 'data',
      sortable: false,
      formatter: this.exampleDatagrid.nativeElement.formatters.text
    });

    this.exampleDatagrid.nativeElement.columns = this.columns;
    this.exampleDatagrid.nativeElement.data = this.children;
  }

}
