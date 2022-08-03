import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-input-routing.module';

@Component({
  selector: 'app-ids-input',
  templateUrl: './ids-input.component.html',
  styleUrls: ['./ids-input.component.css']
})
export class IdsInputComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Input init');
  }

}
