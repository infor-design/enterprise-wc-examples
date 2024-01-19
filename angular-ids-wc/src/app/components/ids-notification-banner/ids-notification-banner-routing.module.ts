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
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Showing various types of notifications',
    }
  },
  { 
    path: 'dynamic', 
    component: DynamicComponent,
    data: {
      type: 'Example',
      description: 'Showing notifications created on the fly',
    }
  },
  { 
    path: 'card', 
    component: CardComponent,
    data: {
      type: 'Example',
      description: 'Showing notifications inside a card',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsNotificationBannerRoutingModule { }
