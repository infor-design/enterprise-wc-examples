import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TagComponent } from './tag.component';
import { TagRoutingModule } from './tag-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TagRoutingModule
  ],
  declarations: [
    TagComponent
  ]
})

export class TagModule {}
