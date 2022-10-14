import { Component, OnInit } from '@angular/core';
import { routes } from './ids-card-routing.module';
@Component({
  selector: 'app-ids-card',
  templateUrl: './ids-card.component.html',
  styleUrls: ['./ids-card.component.css']
})
export class IdsCardComponent implements OnInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngOnInit(): void {
    console.log('IdsCard demo listings OnInit');

    console.log(this.routes);
  }

}
