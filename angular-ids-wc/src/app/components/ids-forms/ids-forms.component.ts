import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-forms-routing.module';

@Component({
  selector: 'app-forms',
  templateUrl: './ids-forms.component.html',
  styleUrls: ['./ids-forms.component.css']
})
export class IdsFormsComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
  }
}
