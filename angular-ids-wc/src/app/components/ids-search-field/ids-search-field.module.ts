import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsSearchFieldRoutingModule } from './ids-search-field-routing.module';
import { IdsSearchFieldComponent } from './ids-search-field.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsSearchFieldComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsSearchFieldRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsSearchFieldModule { }
