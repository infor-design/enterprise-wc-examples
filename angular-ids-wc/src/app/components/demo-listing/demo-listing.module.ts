import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoListingComponent } from './demo-listing.component';


@NgModule({
  declarations: [
    DemoListingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DemoListingComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DemoListingModule { }