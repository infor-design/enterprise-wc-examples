import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IdsLayoutGridRoutingModule } from "./ids-layout-grid-routing.module";
import { IdsLayoutGridComponent } from "./ids-layout-grid.component";
import { ExampleInboxComponent } from "./demos/example-inbox/example-inbox.component";
import { DemoListingModule } from "../demo-listing/demo-listing.module";

@NgModule({
  declarations: [IdsLayoutGridComponent, ExampleInboxComponent],
  imports: [CommonModule, IdsLayoutGridRoutingModule, DemoListingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IdsLayoutGridModule {}
