import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsScrollViewRoutingModule } from './ids-scroll-view-routing.module';
import { IdsScrollViewComponent } from './ids-scroll-view.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsScrollViewComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsScrollViewRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsScrollViewModule { }
