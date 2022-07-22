import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsProgressBarRoutingModule } from './ids-progress-bar-routing.module';
import { IdsProgressBarComponent } from './ids-progress-bar.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsProgressBarComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsProgressBarRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsProgressBarModule { }
