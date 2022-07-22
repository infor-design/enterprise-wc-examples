import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsEmptyMessageRoutingModule } from './ids-empty-message-routing.module';
import { IdsEmptyMessageComponent } from './ids-empty-message.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsEmptyMessageComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsEmptyMessageRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsEmptyMessageModule { }
