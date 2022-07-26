import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTooltipComponent } from './ids-tooltip.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { PerformanceComponent } from './demos/performance/performance.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsTooltipComponent 
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
  { 
    path: 'sandbox', 
    component: SandboxComponent
  },
  { 
    path: 'performance', 
    component: PerformanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsTooltipRoutingModule { }
