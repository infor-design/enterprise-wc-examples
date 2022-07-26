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

export const routes: Routes = [
  { 
    path: '', 
    component: IdsTabsComponent
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
  { 
    path: 'counts', 
    component: CountsComponent
  },
  { 
    path: 'dismissible', 
    component: DismissibleComponent
  },
  { 
    path: 'header-tabs', 
    component: HeaderTabsComponent
  },
  { 
    path: 'modules', 
    component: ModuleComponent
  },
  { 
    path: 'vertical', 
    component: VerticalComponent
  },
  { 
    path: 'swappable', 
    component: SwappableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsTabRoutingModule { }
