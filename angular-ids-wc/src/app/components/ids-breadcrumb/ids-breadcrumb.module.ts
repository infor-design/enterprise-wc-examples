import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsBreadcrumbRoutingModule } from './ids-breadcrumb-routing.module';
import { IdsBreadcrumbComponent } from './ids-breadcrumb.component';
import { ExampleComponent } from './demos/example/example.component';
import { TruncatedComponent } from './demos/truncated/truncated.component';
import { ToolbarComponent } from './demos/toolbar/toolbar.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsBreadcrumbComponent,
    ExampleComponent,
    TruncatedComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    IdsBreadcrumbRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsBreadcrumbModule { }
