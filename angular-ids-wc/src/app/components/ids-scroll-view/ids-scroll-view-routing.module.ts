import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsScrollViewComponent } from './ids-scroll-view.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsScrollViewComponent 
  },
  { 
    path: 'example',
    component: ExampleComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdsScrollViewRoutingModule { }
