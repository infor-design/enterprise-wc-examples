import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsSpinboxRoutingModule } from './ids-spinbox-routing.module';
import { IdsSpinboxComponent } from './ids-spinbox.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsSpinboxComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsSpinboxRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsSpinboxModule { }
