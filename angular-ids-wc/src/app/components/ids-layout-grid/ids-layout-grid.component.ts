import { AfterViewInit, Component } from "@angular/core";
import { routes } from "./ids-layout-grid-routing.module";

@Component({
  selector: "app-ids-layout-grid",
  templateUrl: "./ids-layout-grid.component.html",
  styleUrl: "./ids-layout-grid.component.css",
})
export class IdsLayoutGridComponent implements AfterViewInit {
  public routes = routes.filter((r) => r.path !== "");

  ngAfterViewInit(): void {
    console.log("Ids Layout Grid init");
  }
}
