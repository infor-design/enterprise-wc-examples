import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsPopupMenuRoutingModule } from './ids-popup-menu-routing.module';
import { IdsPopupMenuComponent } from './ids-popup-menu.component';
import { ExampleComponent } from './demos/example/example.component';
import { DataDrivenComponent } from './demos/data-driven/data-driven.component';
import { SelectedStateComponent } from './demos/selected-state/selected-state.component';
import { TriggerImmediateComponent } from './demos/trigger-immediate/trigger-immediate.component';


@NgModule({
  declarations: [
    IdsPopupMenuComponent,
    ExampleComponent,
    DataDrivenComponent,
    SelectedStateComponent,
    TriggerImmediateComponent
  ],
  imports: [
    CommonModule,
    IdsPopupMenuRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsPopupMenuModule { }
