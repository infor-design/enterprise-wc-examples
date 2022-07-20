import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsSwitchRoutingModule } from './ids-switch-routing.module';
import { IdsSwitchComponent } from './ids-switch.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsSwitchComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsSwitchRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsSwitchModule { }
