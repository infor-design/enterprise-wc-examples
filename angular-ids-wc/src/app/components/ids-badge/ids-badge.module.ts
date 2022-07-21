import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsBadgeRoutingModule } from './ids-badge-routing.module';
import { IdsBadgeComponent } from './ids-badge.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsBadgeComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsBadgeRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsBadgeModule { }
