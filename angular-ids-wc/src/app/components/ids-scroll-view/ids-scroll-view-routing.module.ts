import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsScrollViewComponent } from './ids-scroll-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { LayoutGridComponent } from './demos/layout-grid/layout-grid.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsScrollViewComponent 
  },
  { 
    path: 'example',
    component: ExampleComponent 
  },
  {
    path: 'layout-grid',
    component: LayoutGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdsScrollViewRoutingModule { }
