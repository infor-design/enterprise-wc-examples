import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsAppMenuRoutingModule } from './ids-app-menu-routing.module';
import { IdsAppMenuComponent } from './ids-app-menu.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';


@NgModule({
  declarations: [
    IdsAppMenuComponent,
    ExampleComponent,
    SandboxComponent
  ],
  imports: [
    CommonModule,
    IdsAppMenuRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsAppMenuModule { }