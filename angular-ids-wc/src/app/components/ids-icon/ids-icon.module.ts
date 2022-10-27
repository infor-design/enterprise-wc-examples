import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsIconRoutingModule } from './ids-icon-routing.module';
import { IdsIconComponent } from './ids-icon.component';
import { ExampleComponent } from './demos/example/example.component';
import { NotificationBadgeComponent } from './demos/notification-badge/notification-badge.component';
import { VariantAlternateComponent } from './demos/variant-alternate/variant-alternate.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsIconComponent,
    ExampleComponent,
    NotificationBadgeComponent,
    VariantAlternateComponent
  ],
  imports: [
    CommonModule,
    IdsIconRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsIconModule { }
