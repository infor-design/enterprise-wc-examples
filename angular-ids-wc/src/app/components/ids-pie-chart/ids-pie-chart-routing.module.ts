import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsPieChartComponent } from './ids-pie-chart.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsPieChartComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsPieChartRoutingModule { }
