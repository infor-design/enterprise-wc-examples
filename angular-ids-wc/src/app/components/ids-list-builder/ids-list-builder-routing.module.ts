import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsListBuilderComponent } from './ids-list-builder.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectionMultipleComponent } from './demos/selection-multiple/selection-multiple.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsListBuilderComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'selection-multiple',
    component: SelectionMultipleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsListBuilderRoutingModule { }
