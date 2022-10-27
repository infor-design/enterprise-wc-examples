import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsToolbarComponent } from './ids-toolbar.component';
import { ExampleComponent } from './demos/example/example.component';
import { OverflowedComponent } from './demos/overflowed/overflowed.component';
import { CenteredComponent } from './demos/centered/centered.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsToolbarComponent 
  },
  {
    path: 'centered',
    component: CenteredComponent
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
  { 
    path: 'overflowed', 
    component: OverflowedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsToolbarRoutingModule { }
