import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { LabelComponent } from './label.component';

const routes: Routes = [
  {
    path: 'label',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LabelComponent
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
export class LabelRoutingModule {}
