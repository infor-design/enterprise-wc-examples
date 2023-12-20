import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsCheckboxRoutingModule } from './ids-checkbox-routing.module';
import { IdsCheckboxComponent } from './ids-checkbox.component';
import { ExampleComponent } from './demos/example/example.component';
import { ControlFlowComponent } from './demos/control-flow/control-flow.component';
import { DataDrivenComponent } from './demos/data-driven/data-driven.component';
import { DeferredComponent } from './demos/deferred/deferred.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';

@NgModule({
  declarations: [
    IdsCheckboxComponent,
    ExampleComponent,
    ControlFlowComponent,
    DataDrivenComponent,
    DeferredComponent
  ],
  imports: [
    CommonModule,
    IdsCheckboxRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsCheckboxModule { }
