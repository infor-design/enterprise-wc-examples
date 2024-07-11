import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListingModule } from './../demo-listing/demo-listing.module';

import { IdsSplitterRoutingModule } from './ids-splitter-routing.module';
import { IdsSplitterComponent } from './ids-splitter.component';
import { InitIssueComponent } from './demos/init-issue/init-issue.component';


@NgModule({
  declarations: [
    IdsSplitterComponent,
    InitIssueComponent
  ],
  imports: [
    CommonModule,
    IdsSplitterRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsSplitterModule { }
