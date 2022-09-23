import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTreeComponent } from './ids-tree.component';
import { ExampleComponent } from './demos/example/example.component';
import { MultiSelectComponent } from './demos/multi-select/multi-select.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsTreeComponent
  },
  { 
    path: 'example',
    component: ExampleComponent
  },
  { 
    path: 'multi-select',
    component: MultiSelectComponent
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
export class IdsTreeRoutingModule { }
