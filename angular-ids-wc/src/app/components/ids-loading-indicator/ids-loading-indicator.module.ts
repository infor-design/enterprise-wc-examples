import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsLoadingIndicatorRoutingModule } from './ids-loading-indicator-routing.module';
import { IdsLoadingIndicatorComponent } from './ids-loading-indicator.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsLoadingIndicatorComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsLoadingIndicatorRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsLoadingIndicatorModule { }
