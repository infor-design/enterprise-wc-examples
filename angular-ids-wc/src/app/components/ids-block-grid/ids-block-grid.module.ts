import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListingModule } from './../demo-listing/demo-listing.module';

import { IdsBlockGridRoutingModule } from './ids-block-grid-routing.module';
import { IdsBlockGridComponent } from './ids-block-grid.component';
import { ExampleComponent } from './demos/example/example.component';
import { SingleSelectionComponent } from './demos/single-selection/single-selection.component';
import { MultipleSelectionComponent } from './demos/multiple-selection/multiple-selection.component';
import { MixedSelectionComponent } from './demos/mixed-selection/mixed-selection.component';
import { PaginationComponent } from './demos/pagination/pagination.component';
import { MultipleTextSelectionComponent } from './demos/multiple-text-selection/multiple-text-selection.component';


@NgModule({
  declarations: [
    IdsBlockGridComponent,
    ExampleComponent,
    SingleSelectionComponent,
    MultipleSelectionComponent,
    MixedSelectionComponent,
    PaginationComponent,
    MultipleTextSelectionComponent
  ],
  imports: [
    CommonModule,
    IdsBlockGridRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsBlockGridModule { }
