import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsTreeRoutingModule } from './ids-tree-routing.module';
import { IdsTreeComponent } from './ids-tree.component';
import { ExampleComponent } from './demos/example/example.component';
import { MultiSelectComponent } from './demos/multi-select/multi-select.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';


@NgModule({
  declarations: [
    IdsTreeComponent,
    ExampleComponent,
    MultiSelectComponent,
    SandboxComponent
  ],
  imports: [
    CommonModule,
    IdsTreeRoutingModule
  ]
})
export class IdsTreeModule { }
