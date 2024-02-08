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
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Normal pager in Angular',
    }
  },
  { 
    path: 'list',
    component: ListComponent,
    data: {
      type: 'Example',
      description: 'List style pager in Angular',
    }
  },
  { 
    path: 'sandbox',
    component: SandboxComponent,
    data: {
      type: 'Example',
      description: 'Various pager sandbox examples',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsPagerRoutingModule { }
