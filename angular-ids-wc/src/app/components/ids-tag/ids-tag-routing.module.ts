import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTagComponent } from './ids-tag.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsTagComponent 
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Simple tab example in angular',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsTagRoutingModule { }
