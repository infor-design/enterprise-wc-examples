import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsProgressBarRoutingModule } from './ids-progress-bar-routing.module';
import { IdsProgressBarComponent } from './ids-progress-bar.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsProgressBarComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsProgressBarRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsProgressBarModule { }
