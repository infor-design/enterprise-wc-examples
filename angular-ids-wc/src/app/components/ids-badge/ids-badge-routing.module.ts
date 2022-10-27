import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsBadgeComponent } from './ids-badge.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsBadgeComponent
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
export class IdsBadgeRoutingModule { }
