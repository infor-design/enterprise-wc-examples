import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDatePickerRoutingModule } from './ids-date-picker-routing.module';
import { IdsDatePickerComponent } from './ids-date-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { RangeComponent } from './demos/range/range.component';
import { SizesComponent } from './demos/sizes/sizes.component';
import { DisabledDatesComponent } from './demos/disabled-dates/disabled-dates.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { AxeComponent } from './demos/axe/axe.component';


@NgModule({
  declarations: [
    IdsDatePickerComponent,
    ExampleComponent,
    RangeComponent,
    SizesComponent,
    DisabledDatesComponent,
    SandboxComponent,
    AxeComponent
  ],
  imports: [
    CommonModule,
    IdsDatePickerRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDatePickerModule { }
