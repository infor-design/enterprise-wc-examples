import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListingModule } from './../demo-listing/demo-listing.module';

import { IdsCardRoutingModule } from './ids-card-routing.module';
import { IdsCardComponent } from './ids-card.component';
import { ExampleComponent } from './demos/example/example.component';
import { AutoHeightComponent } from './demos/auto-height/auto-height.component';
import { AutoFitComponent } from './demos/auto-fit/auto-fit.component';
import { HeightComponent } from './demos/height/height.component';
import { SingleSelectionComponent } from './demos/single-selection/single-selection.component';
import { MultipleSelectionComponent } from './demos/multiple-selection/multiple-selection.component';
import { ToolbarComponent } from './demos/toolbar/toolbar.component';
import { InfoComponent } from './demos/info/info.component';
import { FooterComponent } from './demos/footer/footer.component';


@NgModule({
  declarations: [
    IdsCardComponent,
    ExampleComponent,
    AutoHeightComponent,
    AutoFitComponent,
    HeightComponent,
    SingleSelectionComponent,
    MultipleSelectionComponent,
    ToolbarComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IdsCardRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsCardModule { }
