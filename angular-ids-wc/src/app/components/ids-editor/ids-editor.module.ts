import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsEditorRoutingModule } from './ids-editor-routing.module';
import { IdsEditorComponent } from './ids-editor.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';


@NgModule({
  declarations: [
    IdsEditorComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsEditorRoutingModule,
    DemoListingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsEditorModule { }
