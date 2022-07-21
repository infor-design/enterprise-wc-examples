import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsWizardComponent } from './ids-wizard.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';

const routes: Routes = [
  { 
    path: '', 
    component: IdsWizardComponent 
  },
  { 
    path: 'example', 
    component: ExampleComponent 
  },
  { 
    path: 'sandbox', 
    component: SandboxComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsWizardRoutingModule { }
