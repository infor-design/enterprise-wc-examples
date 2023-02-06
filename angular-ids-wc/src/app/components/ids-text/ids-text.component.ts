import { Component, AfterViewInit} from '@angular/core';
import { routes } from './ids-text-routing.module';

@Component({
  selector: 'app-ids-text',
  templateUrl: './ids-text.component.html',
  styleUrls: ['./ids-text.component.css']
})
export class IdsTextComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Text init');
  }

}
