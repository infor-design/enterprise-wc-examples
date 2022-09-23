import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsEmptyMessageComponent } from './ids-empty-message.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsEmptyMessageComponent
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
export class IdsEmptyMessageRoutingModule { }
