import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsTooltipRoutingModule } from './ids-tooltip-routing.module';
import { IdsTooltipComponent } from './ids-tooltip.component';
import { ExampleComponent } from './demos/example/example.component';

@NgModule({
  declarations: [
    IdsTooltipComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsTooltipRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsTooltipModule { }
