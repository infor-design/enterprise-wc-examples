import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsThemeSwitcherRoutingModule } from './ids-theme-switcher-routing.module';
import { IdsThemeSwitcherComponent } from './ids-theme-switcher.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsThemeSwitcherComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsThemeSwitcherRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsThemeSwitcherModule { }
