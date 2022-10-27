import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsAppMenuRoutingModule } from './ids-app-menu-routing.module';
import { IdsAppMenuComponent } from './ids-app-menu.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { ExampleFooterComponent } from './demos/example-footer/example-footer.component';


@NgModule({
  declarations: [
    IdsAppMenuComponent,
    ExampleComponent,
    SandboxComponent,
    ExampleFooterComponent
  ],
  imports: [
    CommonModule,
    IdsAppMenuRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsAppMenuModule { }
