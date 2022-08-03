import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsToggleButtonRoutingModule } from './ids-toggle-button-routing.module';
import { IdsToggleButtonComponent } from './ids-toggle-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { IconAlignRightComponent } from './demos/icon-align-right/icon-align-right.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsToggleButtonComponent,
    ExampleComponent,
    IconAlignRightComponent
  ],
  imports: [
    CommonModule,
    IdsToggleButtonRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsToggleButtonModule { }
