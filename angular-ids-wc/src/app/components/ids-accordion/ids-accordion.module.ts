import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsAccordionRoutingModule } from './ids-accordion-routing.module';
import { IdsAccordionComponent } from './ids-accordion.component';
import { ExampleComponent } from './demos/example/example.component';
import { DisabledComponent } from './demos/disabled/disabled.component';
import { IconComponent } from './demos/icon/icon.component';
import { NestedComponent } from './demos/nested/nested.component';


@NgModule({
  declarations: [
    IdsAccordionComponent,
    ExampleComponent,
    DisabledComponent,
    IconComponent,
    NestedComponent
  ],
  imports: [
    CommonModule,
    IdsAccordionRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsAccordionModule { }
