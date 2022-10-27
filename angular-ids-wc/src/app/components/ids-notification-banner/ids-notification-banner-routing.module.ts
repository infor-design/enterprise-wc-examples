import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsNotificationBannerComponent } from './ids-notification-banner.component';
import { ExampleComponent } from './demos/example/example.component';
import { CardComponent } from './demos/card/card.component';
import { DynamicComponent } from './demos/dynamic/dynamic.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsNotificationBannerComponent
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
  { 
    path: 'dynamic', 
    component: DynamicComponent
  },
  { 
    path: 'card', 
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsNotificationBannerRoutingModule { }
