import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTextareaComponent } from './ids-textarea.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsTextareaComponent
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
export class IdsTextareaRoutingModule { }
