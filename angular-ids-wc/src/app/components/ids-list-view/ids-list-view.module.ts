import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsListViewRoutingModule } from './ids-list-view-routing.module';
import { IdsListViewComponent } from './ids-list-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectableSingleComponent } from './demos/selectable-single/selectable-single.component';
import { SelectableMultipleComponent } from './demos/selectable-multiple/selectable-multiple.component';
import { DynamicDisabledItemsComponent } from './demos/dynamic-disabled-items/dynamic-disabled-items.component';
import { SelectedEventComponent } from './demos/selected-event/selected-event.component';
import { TooltipOverflowEllipsesComponent } from './demos/tooltip-overflow-ellipses/tooltip-overflow-ellipses.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { VirtualScrollComponent } from './demos/virtual-scroll/virtual-scroll.component';

@NgModule({
  declarations: [
    IdsListViewComponent,
    ExampleComponent,
    SelectableSingleComponent,
    SelectableMultipleComponent,
    TooltipOverflowEllipsesComponent,
    DynamicDisabledItemsComponent,
    SelectedEventComponent,
    VirtualScrollComponent,
  ],
  imports: [
    CommonModule,
    IdsListViewRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsListViewModule { }
