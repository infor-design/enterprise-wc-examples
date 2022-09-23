import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsSwaplistComponent } from './ids-swaplist.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsSwaplistComponent 
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
export class IdsSwaplistRoutingModule { }
