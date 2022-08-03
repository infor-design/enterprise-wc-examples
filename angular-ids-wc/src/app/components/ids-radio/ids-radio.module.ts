import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsRadioRoutingModule } from './ids-radio-routing.module';
import { IdsRadioComponent } from './ids-radio.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsRadioComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsRadioRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsRadioModule { }
