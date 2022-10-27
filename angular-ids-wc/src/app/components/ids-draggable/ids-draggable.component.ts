import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-draggable-routing.module';

@Component({
  selector: 'app-ids-draggable',
  templateUrl: './ids-draggable.component.html',
  styleUrls: ['./ids-draggable.component.css']
})
export class IdsDraggableComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('IdsDraggable AfterViewInit');
  }

}
