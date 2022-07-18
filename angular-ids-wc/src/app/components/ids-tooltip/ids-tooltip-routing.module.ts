import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTooltipComponent } from './ids-tooltip.component';
import { ExampleComponent } from './demos/example/example.component';

const routes: Routes = [
  { 
    path: '', 
    component: IdsTooltipComponent 
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
export class IdsTooltipRoutingModule { }
