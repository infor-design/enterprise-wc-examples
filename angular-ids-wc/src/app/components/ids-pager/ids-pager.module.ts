import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsPagerRoutingModule } from './ids-pager-routing.module';
import { IdsPagerComponent } from './ids-pager.component';
import { ExampleComponent } from './demos/example/example.component';
import { ListComponent } from './demos/list/list.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { PagerWrapperComponent } from './demos/wrapper/pager-wrapper.component';
import { WrapperExampleComponent } from './demos/wrapper/wrapper-example.component';


@NgModule({
  declarations: [
    IdsPagerComponent,
    ExampleComponent,
    ListComponent,
    SandboxComponent,
    PagerWrapperComponent,
    WrapperExampleComponent
  ],
  imports: [
    CommonModule,
    IdsPagerRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsPagerModule { }
