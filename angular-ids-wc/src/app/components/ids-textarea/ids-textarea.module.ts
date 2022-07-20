import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsTextareaRoutingModule } from './ids-textarea-routing.module';
import { IdsTextareaComponent } from './ids-textarea.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsTextareaComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsTextareaRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsTextareaModule { }
