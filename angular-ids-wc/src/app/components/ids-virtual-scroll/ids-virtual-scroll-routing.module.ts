import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsVirtualScrollComponent } from './ids-virtual-scroll.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsVirtualScrollComponent
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
export class IdsVirtualScrollRoutingModule { }
