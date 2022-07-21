import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsMenuRoutingModule } from './ids-menu-routing.module';
import { IdsMenuComponent } from './ids-menu.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsMenuComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsMenuRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsMenuModule { }
