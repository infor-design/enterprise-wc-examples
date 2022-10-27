import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTriggerFieldComponent } from './ids-trigger-field.component';
import { ExampleComponent } from './demos/example/example.component';
import { LabelStateComponent } from './demos/label-state/label-state.component';
import { TextSizesComponent } from './demos/text-sizes/text-sizes.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsTriggerFieldComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'label-state',
    component: LabelStateComponent
  },
  {
    path: 'text-sizes',
    component: TextSizesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsTriggerFieldRoutingModule { }
