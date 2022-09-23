import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-tree-routing.module';

@Component({
  selector: 'app-ids-tree',
  templateUrl: './ids-tree.component.html',
  styleUrls: ['./ids-tree.component.css']
})
export class IdsTreeComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Tree init');
  }

}
