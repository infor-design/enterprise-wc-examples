import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsScrollViewRoutingModule } from './ids-scroll-view-routing.module';
import { IdsScrollViewComponent } from './ids-scroll-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { LayoutGridComponent } from './demos/layout-grid/layout-grid.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsScrollViewComponent,
    ExampleComponent,
    LayoutGridComponent
  ],
  imports: [
    CommonModule,
    IdsScrollViewRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsScrollViewModule { }
