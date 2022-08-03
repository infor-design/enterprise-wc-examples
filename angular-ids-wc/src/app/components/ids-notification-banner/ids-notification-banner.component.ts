import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-notification-banner-routing.module';

@Component({
  selector: 'app-ids-notification-banner',
  templateUrl: './ids-notification-banner.component.html',
  styleUrls: ['./ids-notification-banner.component.css']
})
export class IdsNotificationBannerComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Notification Banner init');
  }

}
