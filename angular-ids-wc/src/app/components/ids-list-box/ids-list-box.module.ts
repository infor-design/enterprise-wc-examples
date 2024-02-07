import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsListBoxRoutingModule } from './ids-list-box-routing.module';
import { IdsListBoxComponent } from './ids-list-box.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsListBoxComponent,
    ExampleComponent,
  ],
  imports: [
    CommonModule,
    IdsListBoxRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsListBoxModule { }
