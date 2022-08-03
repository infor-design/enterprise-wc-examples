import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDatePickerRoutingModule } from './ids-date-picker-routing.module';
import { IdsDatePickerComponent } from './ids-date-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsDatePickerComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsDatePickerRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDatePickerModule { }
