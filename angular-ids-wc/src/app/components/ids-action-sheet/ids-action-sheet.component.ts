import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { routes } from './ids-action-sheet-routing.module';

@Component({
  selector: 'app-ids-action-sheet',
  templateUrl: './ids-action-sheet.component.html',
  styleUrls: ['./ids-action-sheet.component.css']
})
export class IdsActionSheetComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');
  public columns = [];

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Action Sheet init');
  }
}
