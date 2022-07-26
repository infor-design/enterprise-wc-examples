import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsToggleButtonComponent } from './ids-toggle-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { IconAlignRightComponent } from './demos/icon-align-right/icon-align-right.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsToggleButtonComponent
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
  { 
    path: 'icon-align-right', 
    component: IconAlignRightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsToggleButtonRoutingModule { }
