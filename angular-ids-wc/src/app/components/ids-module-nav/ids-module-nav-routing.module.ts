import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsModuleNavComponent } from './ids-module-nav.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DynamicContentComponent } from './demos/dynamic-content/dynamic-content.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsModuleNavComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'dynamic-content',
    component: DynamicContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsModuleNavRoutingModule { }
