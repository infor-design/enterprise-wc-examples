import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-toolbar-routing.module';

@Component({
  selector: 'app-ids-toolbar',
  templateUrl: './ids-toolbar.component.html',
  styleUrls: ['./ids-toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdsToolbarComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Toolbar init');
  }

}
