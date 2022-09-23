import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListingModule } from './../demo-listing/demo-listing.module';

import { IdsCalendarRoutingModule } from './ids-calendar-routing.module';
import { IdsCalendarComponent } from './ids-calendar.component';
import { ExampleComponent } from './demos/example/example.component';

@NgModule({
  declarations: [
    IdsCalendarComponent,
    ExampleComponent 
  ],
  imports: [
    CommonModule,
    IdsCalendarRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsCalendarModule { }
