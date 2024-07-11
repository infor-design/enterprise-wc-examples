import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-splitter-routing.module';

@Component({
  selector: 'app-ids-splitter',
  templateUrl: './ids-splitter.component.html',
  styleUrls: ['./ids-splitter.component.css']
})
export class IdsSplitterComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsSplitter AfterViewInit');
  }

}
