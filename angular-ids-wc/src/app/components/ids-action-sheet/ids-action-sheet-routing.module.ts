import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsActionSheetComponent } from './ids-action-sheet.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsActionSheetComponent
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
export class IdsActionSheetRoutingModule { }
