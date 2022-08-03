import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-message-routing.module';

@Component({
  selector: 'app-ids-message',
  templateUrl: './ids-message.component.html',
  styleUrls: ['./ids-message.component.css']
})
export class IdsMessageComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Message init');
  }

}
