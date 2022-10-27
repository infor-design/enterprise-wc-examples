import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsTimePickerRoutingModule } from './ids-time-picker-routing.module';
import { IdsTimePickerComponent } from './ids-time-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { SizesComponent } from './demos/sizes/sizes.component';
import { IntervalsComponent } from './demos/intervals/intervals.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { OpenComponent } from './demos/open/open.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsTimePickerComponent,
    ExampleComponent,
    SizesComponent,
    IntervalsComponent,
    SandboxComponent,
    OpenComponent
  ],
  imports: [
    CommonModule,
    IdsTimePickerRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsTimePickerModule { }
