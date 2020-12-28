import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/components', pathMatch: 'full' },
  {
    path: 'components',
    loadChildren: () => import('./samples/tag/tag.module').then(mod => mod.TagModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./samples/label/label.module').then(mod => mod.ButtonModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
