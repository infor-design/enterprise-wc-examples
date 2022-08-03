import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-skip-link-routing.module';

@Component({
  selector: 'app-ids-skip-link',
  templateUrl: './ids-skip-link.component.html',
  styleUrls: ['./ids-skip-link.component.css']
})
export class IdsSkipLinkComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Skip Link init');
  }

}
