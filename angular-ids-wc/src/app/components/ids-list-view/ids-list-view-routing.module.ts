import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsListViewComponent } from './ids-list-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectableSingleComponent } from './demos/selectable-single/selectable-single.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsListViewRoutingModule { }
