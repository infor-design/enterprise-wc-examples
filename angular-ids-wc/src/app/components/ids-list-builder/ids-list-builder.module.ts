import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsListBuilderRoutingModule } from './ids-list-builder-routing.module';
import { IdsListBuilderComponent } from './ids-list-builder.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectionMultipleComponent } from './demos/selection-multiple/selection-multiple.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsListBuilderComponent,
    ExampleComponent,
    SelectionMultipleComponent
  ],
  imports: [
    CommonModule,
    IdsListBuilderRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsListBuilderModule { }
