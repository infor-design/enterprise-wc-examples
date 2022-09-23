import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-textarea-routing.module';

@Component({
  selector: 'app-ids-textarea',
  templateUrl: './ids-textarea.component.html',
  styleUrls: ['./ids-textarea.component.css']
})
export class IdsTextareaComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Textarea init');
  }

}
