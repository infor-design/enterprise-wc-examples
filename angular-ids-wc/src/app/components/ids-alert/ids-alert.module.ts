import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsAlertRoutingModule } from './ids-alert-routing.module';
import { IdsAlertComponent } from './ids-alert.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsAlertComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsAlertRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsAlertModule { }
