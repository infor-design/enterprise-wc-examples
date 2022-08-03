import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-empty-message-routing.module';

@Component({
  selector: 'app-ids-empty-message',
  templateUrl: './ids-empty-message.component.html',
  styleUrls: ['./ids-empty-message.component.css']
})
export class IdsEmptyMessageComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Empty Message init');
  }

}
