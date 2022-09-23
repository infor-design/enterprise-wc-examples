import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsTextareaRoutingModule } from './ids-textarea-routing.module';
import { IdsTextareaComponent } from './ids-textarea.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsTextareaComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsTextareaRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsTextareaModule { }
