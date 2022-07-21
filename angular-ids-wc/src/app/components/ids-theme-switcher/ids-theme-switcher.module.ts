import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsThemeSwitcherRoutingModule } from './ids-theme-switcher-routing.module';
import { IdsThemeSwitcherComponent } from './ids-theme-switcher.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsThemeSwitcherComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsThemeSwitcherRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsThemeSwitcherModule { }
