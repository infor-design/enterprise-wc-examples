import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsInputRoutingModule } from './ids-input-routing.module';
import { IdsInputComponent } from './ids-input.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsInputComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsInputRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsInputModule { }
