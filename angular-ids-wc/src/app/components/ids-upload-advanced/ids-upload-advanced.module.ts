import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsUploadAdvancedRoutingModule } from './ids-upload-advanced-routing.module';
import { IdsUploadAdvancedComponent } from './ids-upload-advanced.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';


@NgModule({
  declarations: [
    IdsUploadAdvancedComponent,
    ExampleComponent,
    SandboxComponent
  ],
  imports: [
    CommonModule,
    IdsUploadAdvancedRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsUploadAdvancedModule { }
