import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsPagerComponent } from './ids-pager.component';
import { ExampleComponent } from './demos/example/example.component';
import { ListComponent } from './demos/list/list.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsPagerComponent
  },
  { 
    path: 'example',
    component: ExampleComponent
  },
  { 
    path: 'list',
    component: ListComponent
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
export class IdsPagerRoutingModule { }
