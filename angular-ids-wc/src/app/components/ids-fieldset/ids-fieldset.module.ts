import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsFieldsetRoutingModule } from './ids-fieldset-routing.module';
import { IdsFieldsetComponent } from './ids-fieldset.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from './../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsFieldsetComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsFieldsetRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsFieldsetModule { }
