import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDataGridRoutingModule } from './ids-data-grid-routing.module';
import { IdsDataGridComponent } from './ids-data-grid.component';
import { ExampleComponent } from './demos/example/example.component';
import { InstancesComponent } from './demos/instances/instances.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';

@NgModule({
  declarations: [
    IdsDataGridComponent,
    ExampleComponent,
    InstancesComponent
  ],
  imports: [
    CommonModule,
    IdsDataGridRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDataGridModule { }
