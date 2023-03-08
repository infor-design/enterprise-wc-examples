import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsValidationComponent } from './ids-validation.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsValidationComponent
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
export class IdsValidationRoutingModule { }
