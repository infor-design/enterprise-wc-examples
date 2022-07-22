import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsErrorPageRoutingModule } from './ids-error-page-routing.module';
import { IdsErrorPageComponent } from './ids-error-page.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsErrorPageComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsErrorPageRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsErrorPageModule { }
