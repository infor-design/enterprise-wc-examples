import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsColorPickerRoutingModule } from './ids-color-picker-routing.module';
import { IdsColorPickerComponent } from './ids-color-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { ExampleSizesComponent } from './demos/example-sizes/example-sizes.component';
import { AxeComponent } from './demos/axe/axe.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { NoScrollComponent } from './demos/no-scroll/no-scroll.component';


@NgModule({
  declarations: [
    IdsColorPickerComponent,
    ExampleComponent,
    ExampleSizesComponent,
    NoScrollComponent,
    AxeComponent
  ],
  imports: [
    CommonModule,
    IdsColorPickerRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsColorPickerModule { }
