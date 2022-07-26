import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsMaskComponent } from './ids-mask.component';
import { ExampleComponent } from './demos/example/example.component';
import { GuidesComponent } from './demos/guides/guides.component';
import { LocalizedDatesComponent } from './demos/localized-dates/localized-dates.component';
import { LocalizedNumbersComponent } from './demos/localized-numbers/localized-numbers.component';
import { MaskAttributeComponent } from './demos/mask-attribute/mask-attribute.component';
import { NumberLeadingZerosComponent } from './demos/number-leading-zeros/number-leading-zeros.component';
import { PrefixSuffixComponent } from './demos/prefix-suffix/prefix-suffix.component';

export const routes: Routes = [
  { 
    path: '', component: IdsMaskComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'guides',
    component: GuidesComponent
  },
  {
    path: 'localized-dates',
    component: LocalizedDatesComponent
  },
  {
    path: 'localized-numbers',
    component: LocalizedNumbersComponent
  },
  {
    path: 'mask-attribute',
    component: MaskAttributeComponent
  },
  {
    path: 'number-leading-zeros',
    component: NumberLeadingZerosComponent
  },
  {
    path: 'prefix-suffix',
    component: PrefixSuffixComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsMaskRoutingModule { }
