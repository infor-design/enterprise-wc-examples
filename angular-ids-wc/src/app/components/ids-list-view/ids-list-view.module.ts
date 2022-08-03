import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsListViewRoutingModule } from './ids-list-view-routing.module';
import { IdsListViewComponent } from './ids-list-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectableSingleComponent } from './demos/selectable-single/selectable-single.component';
import { SelectableMultipleComponent } from './demos/selectable-multiple/selectable-multiple.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsListViewComponent,
    ExampleComponent,
    SelectableSingleComponent,
    SelectableMultipleComponent
  ],
  imports: [
    CommonModule,
    IdsListViewRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsListViewModule { }
