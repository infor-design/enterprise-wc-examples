import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTabsComponent } from './ids-tabs.component';
import { ExampleComponent } from './demos/example/example.component';
import { CountsComponent } from './demos/counts/counts.component';
import { DismissibleComponent } from './demos/dismissible/dismissible.component';
import { HeaderTabsComponent } from './demos/header-tabs/header-tabs.component';
import { ModuleComponent } from './demos/module/module.component';
import { VerticalComponent } from './demos/vertical/vertical.component';
import { SwappableComponent } from './demos/swappable/swappable.component';
import { OverflowComponent } from './demos/overflow/overflow.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsTabsComponent
  },
  { 
    path: 'example', 
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Shows main example'
    }
  },
  { 
    path: 'counts', 
    component: CountsComponent,
    data: {
      type: 'Example',
      description: 'Shows counts example'
    }
  },
  { 
    path: 'dismissible', 
    component: DismissibleComponent,
    data: {
      type: 'Example',
      description: 'Shows dismissible tabs'
    }
  },
  { 
    path: 'header-tabs', 
    component: HeaderTabsComponent,
    data: {
      type: 'Example',
      description: 'Shows header tabs'
    }
  },
  { 
    path: 'module', 
    component: ModuleComponent,
    data: {
      type: 'Example',
      description: 'Shows module tabs'
    }
  },
  ,
  {
    path: 'overflow',
    component: OverflowComponent,
    data: {
      type: 'Example',
      description: 'Shows overflow tabs'
    }
  },
  { 
    path: 'vertical', 
    component: VerticalComponent,
    data: {
      type: 'Example',
      description: 'Shows vertical tabs'
    }
  },
  { 
    path: 'swappable', 
    component: SwappableComponent,
    data: {
      type: 'Example',
      description: 'Shows sortable tabs'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsTabRoutingModule { }
