import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsTabRoutingModule } from './ids-tabs-routing.module';
import { IdsTabsComponent } from './ids-tabs.component';
import { ExampleComponent } from './demos/example/example.component';
import { CountsComponent } from './demos/counts/counts.component';
import { DismissibleComponent } from './demos/dismissible/dismissible.component';
import { HeaderTabsComponent } from './demos/header-tabs/header-tabs.component';
import { ModuleComponent } from './demos/module/module.component';
import { VerticalComponent } from './demos/vertical/vertical.component';
import { SwappableComponent } from './demos/swappable/swappable.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsTabsComponent,
    ExampleComponent,
    CountsComponent,
    DismissibleComponent,
    HeaderTabsComponent,
    ModuleComponent,
    VerticalComponent,
    SwappableComponent
  ],
  imports: [
    CommonModule,
    IdsTabRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsTabModule { }
