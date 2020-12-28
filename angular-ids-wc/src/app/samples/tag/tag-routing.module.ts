import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { TagComponent } from './tag.component';

const routes: Routes = [
  {
    path: 'tag',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TagComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TagRoutingModule {}
