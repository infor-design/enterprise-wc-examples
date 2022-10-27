import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListingModule } from './../demo-listing/demo-listing.module';

import { IdsExpandableAreaRoutingModule } from './ids-expandable-area-routing.module';
import { IdsExpandableAreaComponent } from './ids-expandable-area.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsExpandableAreaComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsExpandableAreaRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsExpandableAreaModule { }
