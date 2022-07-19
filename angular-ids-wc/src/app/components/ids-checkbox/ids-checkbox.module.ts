import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsCheckboxRoutingModule } from './ids-checkbox-routing.module';
import { IdsCheckboxComponent } from './ids-checkbox.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsCheckboxComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsCheckboxRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsCheckboxModule { }
