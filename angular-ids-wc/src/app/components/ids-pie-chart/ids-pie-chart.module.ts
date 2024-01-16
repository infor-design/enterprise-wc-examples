import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsPieChartRoutingModule } from './ids-pie-chart-routing.module';
import { IdsPieChartComponent } from './ids-pie-chart.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';

@NgModule({
    declarations: [
        IdsPieChartComponent,
        ExampleComponent,
        SandboxComponent
    ],
    imports: [
        CommonModule,
        IdsPieChartRoutingModule,
        DemoListingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IdsPieChartModule { }
