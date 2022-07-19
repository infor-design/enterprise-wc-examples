import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsDropdownRoutingModule } from './ids-dropdown-routing.module';
import { IdsDropdownComponent } from './ids-dropdown.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsDropdownComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsDropdownRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsDropdownModule { }
