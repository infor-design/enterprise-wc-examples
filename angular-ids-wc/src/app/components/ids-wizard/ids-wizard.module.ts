import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsWizardRoutingModule } from './ids-wizard-routing.module';
import { IdsWizardComponent } from './ids-wizard.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';


@NgModule({
  declarations: [
    IdsWizardComponent,
    ExampleComponent,
    SandboxComponent
  ],
  imports: [
    CommonModule,
    IdsWizardRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsWizardModule { }
