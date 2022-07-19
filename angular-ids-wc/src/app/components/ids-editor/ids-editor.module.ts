import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsEditorRoutingModule } from './ids-editor-routing.module';
import { IdsEditorComponent } from './ids-editor.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsEditorComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsEditorRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsEditorModule { }
