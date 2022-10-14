import { Component, OnInit } from '@angular/core';
import { routes } from './ids-fieldset-routing.module';

@Component({
  selector: 'app-ids-fieldset',
  templateUrl: './ids-fieldset.component.html',
  styleUrls: ['./ids-fieldset.component.css']
})
export class IdsFieldsetComponent implements OnInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngOnInit(): void {
    console.log('IdsFieldset OnInit');
  }

}
