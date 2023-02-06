import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IdsTextRoutingModule } from './ids-text-routing.module';
import { IdsTextComponent } from './ids-text.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsTextComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsTextRoutingModule,
    FormsModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsTextModule { }
