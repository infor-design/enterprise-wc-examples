import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsAppMenuComponent } from './ids-app-menu.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { ExampleFooterComponent } from './demos/example-footer/example-footer.component';
import { DynamicContentComponent } from './demos/dynamic-content/dynamic-content.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsAppMenuComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'example-footer',
    component: ExampleFooterComponent
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
export class IdsAppMenuRoutingModule { }
