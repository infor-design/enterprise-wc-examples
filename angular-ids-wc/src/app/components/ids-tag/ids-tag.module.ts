import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IdsTagRoutingModule } from './ids-tag-routing.module';
import { IdsTagComponent } from './ids-tag.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsTagComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsTagRoutingModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsTagModule { }
