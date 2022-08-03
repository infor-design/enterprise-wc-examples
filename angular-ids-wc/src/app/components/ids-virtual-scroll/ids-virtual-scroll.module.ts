import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsVirtualScrollRoutingModule } from './ids-virtual-scroll-routing.module';
import { IdsVirtualScrollComponent } from './ids-virtual-scroll.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsVirtualScrollComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsVirtualScrollRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsVirtualScrollModule { }
