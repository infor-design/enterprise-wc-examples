import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsFieldsetRoutingModule } from './ids-fieldset-routing.module';
import { IdsFieldsetComponent } from './ids-fieldset.component';


@NgModule({
  declarations: [
    IdsFieldsetComponent
  ],
  imports: [
    CommonModule,
    IdsFieldsetRoutingModule
  ]
})
export class IdsFieldsetModule { }
