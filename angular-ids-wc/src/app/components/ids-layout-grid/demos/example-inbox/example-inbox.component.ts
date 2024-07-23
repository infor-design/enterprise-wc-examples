import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import productsJSON from "../../../../../api/products.json";

@Component({
  selector: "app-example-inbox",
  templateUrl: "./example-inbox.component.html",
  styleUrl: "./example-inbox.component.css",
})
export class ExampleInboxComponent implements OnInit, AfterViewInit {
  @ViewChild("splitter", { read: ElementRef }) splitter;
  @ViewChild("listView", { read: ElementRef }) listView;
  @ViewChild("listViewCell", { read: ElementRef }) listViewCell;
  @ViewChild("hiddenCellMd", { read: ElementRef }) hiddenCellMd;
  @ViewChild("p2", { read: ElementRef }) p2;
  @ViewChild("menuButton", { read: ElementRef }) menuButton;

  breakpointMd = 840;
  template =
    '<ids-text font-size="16" type="h2">${productName}</ids-text> <ids-text font-size="12" type="span">Count: ${units}</ids-text> <ids-text font-size="12" type="span">Price: $ ${unitPrice}</ids-text>';

  constructor() {}

  ngOnInit(): void {
    console.log("IdsLayoutGrid example inbox OnInit");
  }

  ngAfterViewInit(): void {
    if (this.splitter) {
      console.log(this.splitter.nativeElement.initialized);
    }

    if (this.listView) {
      this.listView.nativeElement.defaultTemplate = this.template;
      this.listView.nativeElement.data = productsJSON;

      this.listView.nativeElement.addEventListener("click", (e: any) => {
        console.info("clicked event called", e.detail);

        const paneWidth = this.p2.nativeElement.getBoundingClientRect().width;
        if (paneWidth < this.breakpointMd) {
          this.hiddenCellMd.nativeElement.removeAttribute("hide");
          this.listViewCell.nativeElement.setAttribute("hide", "md");
          this.menuButton.nativeElement.icon = "arrow-left";
        }
      });
    }

    if (this.menuButton) {
      this.menuButton.nativeElement.addEventListener("click", (e: any) => {
        const paneWidth = this.p2.nativeElement.getBoundingClientRect().width;
        if (paneWidth < this.breakpointMd) {
          this.hiddenCellMd.nativeElement.setAttribute("hide", "md");
          this.listViewCell.nativeElement.removeAttribute("hide");
          this.menuButton.nativeElement.icon = "menu";
        }
      });
    }
  }
}
