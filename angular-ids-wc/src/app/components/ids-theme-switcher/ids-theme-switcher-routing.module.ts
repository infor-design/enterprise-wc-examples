import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsThemeSwitcherComponent } from './ids-theme-switcher.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsThemeSwitcherComponent 
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
export class IdsThemeSwitcherRoutingModule { }
