import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsNotificationBannerRoutingModule } from './ids-notification-banner-routing.module';
import { IdsNotificationBannerComponent } from './ids-notification-banner.component';
import { ExampleComponent } from './demos/example/example.component';
import { DynamicComponent } from './demos/dynamic/dynamic.component';
import { CardComponent } from './demos/card/card.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsNotificationBannerComponent,
    ExampleComponent,
    DynamicComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IdsNotificationBannerRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsNotificationBannerModule { }
