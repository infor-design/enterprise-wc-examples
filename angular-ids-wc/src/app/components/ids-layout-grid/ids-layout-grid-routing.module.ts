import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IdsLayoutGridComponent } from "./ids-layout-grid.component";
import { ExampleInboxComponent } from "./demos/example-inbox/example-inbox.component";

export const routes: Routes = [
  {
    path: "",
    component: IdsLayoutGridComponent,
  },
  {
    path: "example-inbox",
    component: ExampleInboxComponent,
    data: {
      type: "Example",
      description: "Shows an example inbox",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdsLayoutGridRoutingModule {}
