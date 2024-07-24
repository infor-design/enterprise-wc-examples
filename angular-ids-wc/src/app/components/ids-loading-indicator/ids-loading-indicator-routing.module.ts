import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsLoadingIndicatorComponent } from './ids-loading-indicator.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsLoadingIndicatorComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Shows a several loading indicators',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsLoadingIndicatorRoutingModule { }
