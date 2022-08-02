import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsAboutRoutingModule } from './ids-about-routing.module';
import { IdsAboutComponent } from './ids-about.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingComponent } from '../demo-listing/demo-listing.component';


@NgModule({
  declarations: [
    IdsAboutComponent,
    ExampleComponent,
    DemoListingComponent
  ],
  imports: [
    CommonModule,
    IdsAboutRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsAboutModule { }
