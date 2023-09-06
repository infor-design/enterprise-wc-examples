import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-reactive-forms-routing.module';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './ids-reactive-forms.component.html',
  styleUrls: ['./ids-reactive-forms.component.css']
})
export class IdsReactiveFormsComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
  }
}
