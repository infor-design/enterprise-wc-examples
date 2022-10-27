import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsPopupRoutingModule } from './ids-popup-routing.module';
import { IdsPopupComponent } from './ids-popup.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsPopupComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsPopupRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsPopupModule { }
