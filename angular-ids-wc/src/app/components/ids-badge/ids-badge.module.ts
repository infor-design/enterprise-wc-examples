import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsBadgeRoutingModule } from './ids-badge-routing.module';
import { IdsBadgeComponent } from './ids-badge.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsBadgeComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsBadgeRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsBadgeModule { }
