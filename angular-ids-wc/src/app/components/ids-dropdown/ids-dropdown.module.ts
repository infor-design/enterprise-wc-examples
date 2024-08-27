import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDropdownRoutingModule } from './ids-dropdown-routing.module';
import { IdsDropdownComponent } from './ids-dropdown.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { DynamicComponent } from './demos/dynamic/dynamic.component';
import { TypeaheadComponent } from './demos/typeahead/typeahead.component';
import { SizesComponent } from './demos/sizes/sizes.component';
import { SandBoxComponent } from './demos/sandbox/sandbox.component';
import { FormsModule } from '@angular/forms';
import { IdsFormAccessorsModule } from 'src/directives/ids-form-accessors.module';


@NgModule({
  declarations: [
    IdsDropdownComponent,
    ExampleComponent,
    DynamicComponent,
    TypeaheadComponent,
    SizesComponent,
    SandBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IdsFormAccessorsModule,
    IdsDropdownRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDropdownModule { }
