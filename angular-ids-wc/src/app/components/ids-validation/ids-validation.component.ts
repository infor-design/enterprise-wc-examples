import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-validation-routing.module';

@Component({
  selector: 'app-ids-validation',
  templateUrl: './ids-validation.component.html',
  styleUrls: ['./ids-validation.component.css']
})
export class IdsValidationComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Input init');
  }

}
