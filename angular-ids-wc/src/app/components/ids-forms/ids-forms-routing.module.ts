import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsFormsComponent } from './ids-forms.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsFormsComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsFormsRoutingModule { }
