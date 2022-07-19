import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDataLabelRoutingModule } from './ids-data-label-routing.module';
import { IdsDataLabelComponent } from './ids-data-label.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsDataLabelComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsDataLabelRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDataLabelModule { }
