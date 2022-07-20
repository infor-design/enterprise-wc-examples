import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsMultiselectRoutingModule } from './ids-multiselect-routing.module';
import { IdsMultiselectComponent } from './ids-multiselect.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsMultiselectComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsMultiselectRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsMultiselectModule { }
