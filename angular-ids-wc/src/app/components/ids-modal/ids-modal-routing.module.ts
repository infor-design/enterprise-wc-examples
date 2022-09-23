import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsModalComponent } from './ids-modal.component';
import { ExampleComponent } from './demos/example/example.component';
import { FocusComponent } from './demos/focus/focus.component';
import { FullsizeComponent } from './demos/fullsize/fullsize.component';
import { KeepOpenComponent } from './demos/keep-open/keep-open.component';
import { NestedComponent } from './demos/nested/nested.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsModalComponent
  },
  { 
    path: 'example',
    component: ExampleComponent
  },
  { 
    path: 'focus',
    component: FocusComponent
  },
  { 
    path: 'fullsize',
    component: FullsizeComponent
  },
  { 
    path: 'keep-open',
    component: KeepOpenComponent
  },
  { 
    path: 'nested',
    component: NestedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsModalRoutingModule { }
