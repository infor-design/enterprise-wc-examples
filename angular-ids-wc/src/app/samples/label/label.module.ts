import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LabelComponent } from './label.component';
import { LabelRoutingModule } from './label-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LabelRoutingModule
  ],
  declarations: [
    LabelComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ButtonModule {}
