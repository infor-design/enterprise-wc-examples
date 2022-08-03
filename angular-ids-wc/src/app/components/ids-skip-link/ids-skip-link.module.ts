import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsSkipLinkRoutingModule } from './ids-skip-link-routing.module';
import { IdsSkipLinkComponent } from './ids-skip-link.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsSkipLinkComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsSkipLinkRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsSkipLinkModule { }
