import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-editor-routing.module';

@Component({
  selector: 'app-ids-editor',
  templateUrl: './ids-editor.component.html',
  styleUrls: ['./ids-editor.component.css']
})
export class IdsEditorComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor(
  ) { }

  ngAfterViewInit(): void {
    console.log('Ids Editor init');
  }

}
