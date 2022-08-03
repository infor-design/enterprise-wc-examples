import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-toast-routing.module';

@Component({
  selector: 'app-ids-toast',
  templateUrl: './ids-toast.component.html',
  styleUrls: ['./ids-toast.component.css']
})
export class IdsToastComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Toast init');
  }

}
