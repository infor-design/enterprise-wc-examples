import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDatePickerRoutingModule } from './ids-date-picker-routing.module';
import { IdsDatePickerComponent } from './ids-date-picker.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsDatePickerComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsDatePickerRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDatePickerModule { }
