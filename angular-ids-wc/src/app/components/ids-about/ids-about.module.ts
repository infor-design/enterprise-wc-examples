import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsAboutRoutingModule } from './ids-about-routing.module';
import { IdsAboutComponent } from './ids-about.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsAboutComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsAboutRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsAboutModule { }
