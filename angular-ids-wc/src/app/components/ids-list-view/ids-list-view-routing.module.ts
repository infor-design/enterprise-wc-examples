import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsListViewComponent } from './ids-list-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectableSingleComponent } from './demos/selectable-single/selectable-single.component';
import { SelectableMultipleComponent } from './demos/selectable-multiple/selectable-multiple.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsListViewComponent 
  },
  { 
    path: 'example',
    component: ExampleComponent
  },
  { 
    path: 'selectable-single',
    component: SelectableSingleComponent
  },
  { 
    path: 'selectable-multiple',
    component: SelectableMultipleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsListViewRoutingModule { }
