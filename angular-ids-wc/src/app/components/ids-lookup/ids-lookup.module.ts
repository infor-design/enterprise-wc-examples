import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsLookupRoutingModule } from './ids-lookup-routing.module';
import { IdsLookupComponent } from './ids-lookup.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';

@NgModule({
  declarations: [
    IdsLookupComponent,
    ExampleComponent,
  ],
  imports: [
    CommonModule,
    IdsLookupRoutingModule,
    DemoListingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsLookupModule { }
