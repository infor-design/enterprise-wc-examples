import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsToastRoutingModule } from './ids-toast-routing.module';
import { IdsToastComponent } from './ids-toast.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';


@NgModule({
  declarations: [
    IdsToastComponent,
    ExampleComponent,
    SandboxComponent
  ],
  imports: [
    CommonModule,
    IdsToastRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsToastModule { }
