import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { routes } from './ids-popup-routing.module';

@Component({
  selector: 'app-ids-popup',
  templateUrl: './ids-popup.component.html',
  styleUrls: ['./ids-popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdsPopupComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Popup init');
  }
}
