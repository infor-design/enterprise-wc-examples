import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsBreadcrumbRoutingModule } from './ids-breadcrumb-routing.module';
import { IdsBreadcrumbComponent } from './ids-breadcrumb.component';
import { ExampleComponent } from './demos/example/example.component';
import { TruncatedComponent } from './demos/truncated/truncated.component';
import { ToolbarComponent } from './demos/toolbar/toolbar.component';


@NgModule({
  declarations: [
    IdsBreadcrumbComponent,
    ExampleComponent,
    TruncatedComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    IdsBreadcrumbRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsBreadcrumbModule { }
