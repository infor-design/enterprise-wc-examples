import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsModalRoutingModule } from './ids-modal-routing.module';
import { IdsModalComponent } from './ids-modal.component';
import { ExampleComponent } from './demos/example/example.component';
import { FocusComponent } from './demos/focus/focus.component';
import { FullsizeComponent } from './demos/fullsize/fullsize.component';
import { KeepOpenComponent } from './demos/keep-open/keep-open.component';
import { NestedComponent } from './demos/nested/nested.component';
import { VisibleComponent } from './demos/visible/visible.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsModalComponent,
    ExampleComponent,
    FocusComponent,
    FullsizeComponent,
    KeepOpenComponent,
    NestedComponent,
    VisibleComponent
  ],
  imports: [
    CommonModule,
    IdsModalRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsModalModule { }
