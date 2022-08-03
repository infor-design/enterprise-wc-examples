import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './ids-pager-routing.module';
import IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';

@Component({
  selector: 'app-ids-pager',
  templateUrl: './ids-pager.component.html',
  styleUrls: ['./ids-pager.component.css']
})
export class IdsPagerComponent implements AfterViewInit {
  @ViewChild('table', { read: ElementRef }) table: IdsDataGrid;
  public routes = routes.filter(r => r.path !== '');
  public columns = [];

  constructor(
    public router: Router
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Pager init');
  }

}
