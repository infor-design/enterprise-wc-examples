import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsErrorPageRoutingModule } from './ids-error-page-routing.module';
import { IdsErrorPageComponent } from './ids-error-page.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsErrorPageComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsErrorPageRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsErrorPageModule { }
