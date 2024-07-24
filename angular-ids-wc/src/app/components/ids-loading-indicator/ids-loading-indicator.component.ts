import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './ids-loading-indicator-routing.module';
import 'ids-enterprise-wc/components/ids-spinbox/ids-spinbox';

@Component({
  selector: 'app-ids-loading-indicator',
  templateUrl: './ids-loading-indicator.component.html',
  styleUrls: ['./ids-loading-indicator.component.css']
})
export class IdsLoadingIndicatorComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');
  public columns = [];

  constructor(
    public router: Router
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Loading Indicator init');
  }
}
