import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDataGridRoutingModule } from './ids-data-grid-routing.module';
import { IdsDataGridComponent } from './ids-data-grid.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';

@NgModule({
  declarations: [
    IdsDataGridComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsDataGridRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDataGridModule { }
