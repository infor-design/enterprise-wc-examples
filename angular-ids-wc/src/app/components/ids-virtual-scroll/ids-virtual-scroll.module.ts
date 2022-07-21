import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsVirtualScrollRoutingModule } from './ids-virtual-scroll-routing.module';
import { IdsVirtualScrollComponent } from './ids-virtual-scroll.component';
import { ExampleComponent } from './demos/example/example.component';


@NgModule({
  declarations: [
    IdsVirtualScrollComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    IdsVirtualScrollRoutingModule
  ]
})
export class IdsVirtualScrollModule { }
