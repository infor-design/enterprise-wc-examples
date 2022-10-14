import { Component, OnInit } from '@angular/core';
import { routes } from './ids-masthead-routing.module';

@Component({
  selector: 'app-ids-masthead',
  templateUrl: './ids-masthead.component.html',
  styleUrls: ['./ids-masthead.component.css']
})
export class IdsMastheadComponent implements OnInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngOnInit(): void {
    console.log('Ids Masthead init');
  }

}
