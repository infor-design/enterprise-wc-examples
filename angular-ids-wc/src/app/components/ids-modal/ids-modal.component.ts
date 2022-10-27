import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-modal-routing.module';

@Component({
  selector: 'app-ids-modal',
  templateUrl: './ids-modal.component.html',
  styleUrls: ['./ids-modal.component.css']
})
export class IdsModalComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Modal init');
  }

}
