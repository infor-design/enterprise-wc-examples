import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTextComponent } from './ids-text.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsTextComponent 
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
export class IdsTextRoutingModule { }
