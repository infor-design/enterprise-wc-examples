import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsButtonRoutingModule } from './ids-button-routing.module';
import { IdsButtonComponent } from './ids-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { ResponsiveComponent } from './demos/responsive/responsive.component';
import { TestFallbackSlotComponent } from './demos/test-fallback-slot/test-fallback-slot.component';
import { PerformanceComponent } from './demos/performance/performance.component';
import { VariantAlternateComponent } from './demos/variant-alternate/variant-alternate.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsButtonComponent,
    ExampleComponent,
    ResponsiveComponent,
    TestFallbackSlotComponent,
    PerformanceComponent,
    VariantAlternateComponent
  ],
  imports: [
    CommonModule,
    IdsButtonRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsButtonModule { }
