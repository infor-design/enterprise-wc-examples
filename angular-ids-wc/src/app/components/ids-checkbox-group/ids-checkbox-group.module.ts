import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsCheckboxGroupRoutingModule } from './ids-checkbox-group-routing.module';
import { IdsCheckboxGroupComponent } from './ids-checkbox-group.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsCheckboxGroupComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsCheckboxGroupRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsCheckboxGroupModule { }
