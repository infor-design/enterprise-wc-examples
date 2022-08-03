import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-mask-routing.module';

@Component({
  selector: 'app-ids-mask',
  templateUrl: './ids-mask.component.html',
  styleUrls: ['./ids-mask.component.css']
})
export class IdsMaskComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Mask init');
  }

}
