import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsSwitchComponent } from './ids-switch.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', component: IdsSwitchComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Simple switch example in angular',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsSwitchRoutingModule { }
