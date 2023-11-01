import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsMultiselectRoutingModule } from './ids-multiselect-routing.module';
import { IdsMultiselectComponent } from './ids-multiselect.component';
import { ExampleComponent } from './demos/example/example.component';
import { ExampleComponent as ExampleComponent2 } from './demos/dropdown/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsMultiselectComponent,
    ExampleComponent,
    ExampleComponent2,
  ],
  imports: [
    CommonModule,
    IdsMultiselectRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsMultiselectModule { }
