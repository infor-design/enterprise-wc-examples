import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTreeComponent } from './ids-tree.component';
import { ExampleComponent } from './demos/example/example.component';
import { MultiSelectComponent } from './demos/multi-select/multi-select.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsTreeComponent
  },
  { 
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Shows a tree loaded via JSON',
    }
  },
  { 
    path: 'multi-select',
    component: MultiSelectComponent,
    data: {
      type: 'Example',
      description: 'Shows a tree with multiselect',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsTreeRoutingModule { }
