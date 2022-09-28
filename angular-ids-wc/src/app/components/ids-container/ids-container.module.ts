import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListingModule } from './../demo-listing/demo-listing.module';

import { IdsContainerRoutingModule } from './ids-container-routing.module';
import { IdsContainerComponent } from './ids-container.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsContainerComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsContainerRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsContainerModule { }
