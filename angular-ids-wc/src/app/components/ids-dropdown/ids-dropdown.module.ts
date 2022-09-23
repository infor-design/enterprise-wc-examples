import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDropdownRoutingModule } from './ids-dropdown-routing.module';
import { IdsDropdownComponent } from './ids-dropdown.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { TypeaheadComponent } from './demos/typeahead/typeahead.component';
import { SizesComponent } from './demos/sizes/sizes.component';


@NgModule({
  declarations: [
    IdsDropdownComponent,
    ExampleComponent,
    TypeaheadComponent,
    SizesComponent
  ],
  imports: [
    CommonModule,
    IdsDropdownRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDropdownModule { }
