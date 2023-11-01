import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsModuleNavRoutingModule } from './ids-module-nav-routing.module';
import { IdsModuleNavComponent } from './ids-module-nav.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { ExampleFooterComponent } from './demos/example-footer/example-footer.component';


@NgModule({
  declarations: [
    IdsModuleNavComponent,
    ExampleComponent,
    SandboxComponent,
    ExampleFooterComponent
  ],
  imports: [
    CommonModule,
    IdsModuleNavRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsModuleNavModule { }
