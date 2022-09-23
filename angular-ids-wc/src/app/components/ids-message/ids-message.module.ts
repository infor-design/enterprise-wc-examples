import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsMessageRoutingModule } from './ids-message-routing.module';
import { IdsMessageComponent } from './ids-message.component';
import { ExampleComponent } from './demos/example/example.component';
import { TypesComponent } from './demos/types/types.component';
import { OverlayOpacityComponent } from './demos/overlay-opacity/overlay-opacity.component';
import { EventsComponent } from './demos/events/events.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsMessageComponent,
    ExampleComponent,
    TypesComponent,
    OverlayOpacityComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    IdsMessageRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsMessageModule { }
