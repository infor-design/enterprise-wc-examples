import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

const item2DArray = [
  [{"name": "Clock1", "icon": "clock", "color": "azure"}, {"name": "Clock2", "icon": "clock", "color": "ruby"}],
  [{"name": "Clock3", "icon": "clock", "color": "emerald"}, {"name": "Clock4", "icon": "clock", "color": false}],
  [{"name": "Clock5", "icon": "clock", "color": "amethyst"}, {"name": "Clock6", "icon": "clock", "color": "azure"}],
  [{"name": "Clock7", "icon": "clock", "color": "ruby"}, {"name": "Clock8", "icon": "clock", "color": false}],
  [{"name": "Clock9", "icon": "clock", "color": "emerald"}, {"name": "Clock10", "icon": "clock", "color": "amethyst"}],
  [{"name": "Clock11", "icon": "clock", "color": false}, {"name": "Clock12", "icon": "clock", "color": "azure"}],
  [{"name": "Clock13", "icon": "clock", "color": "ruby"}, {"name": "Clock14", "icon": "clock", "color": false}],
  [{"name": "Clock15", "icon": "clock", "color": "emerald"}, {"name": "Clock16", "icon": "clock", "color": "amethyst"}],
  [{"name": "Clock17", "icon": "clock", "color": "azure"}, {"name": "Clock18", "icon": "clock", "color": "ruby"}],
  [{"name": "Clock19", "icon": "clock", "color": false}, {"name": "Clock20", "icon": "clock", "color": "emerald"}]
];

const alternateItem2DArray = [
  [{"name": "Clock65", "icon": "clock", "color": "amethyst"}, {"name": "Clock66", "icon": "clock", "color": false}],
  [{"name": "Clock67", "icon": "clock", "color": "azure"}, {"name": "Clock68", "icon": "clock", "color": "ruby"}],
  [{"name": "Clock69", "icon": "clock", "color": false}, {"name": "Clock70", "icon": "clock", "color": "emerald"}],
  [{"name": "Clock71", "icon": "clock", "color": "amethyst"}, {"name": "Clock72", "icon": "clock", "color": "azure"}],
  [{"name": "Clock73", "icon": "clock", "color": "ruby"}, {"name": "Clock74", "icon": "clock", "color": false}],
  [{"name": "Clock75", "icon": "clock", "color": "emerald"}, {"name": "Clock76", "icon": "clock", "color": "amethyst"}],
  [{"name": "Clock77", "icon": "clock", "color": "azure"}, {"name": "Clock78", "icon": "clock", "color": "ruby"}],
  [{"name": "Clock79", "icon": "clock", "color": false}, {"name": "Clock80", "icon": "clock", "color": "emerald"}],
  [{"name": "Clock81", "icon": "clock", "color": "amethyst"}, {"name": "Clock82", "icon": "clock", "color": "azure"}],
  [{"name": "Clock83", "icon": "clock", "color": "ruby"}, {"name": "Clock84", "icon": "clock", "color": false}]
];

const singlePage2DArray = [
  [{"name": "Clock1", "icon": "clock", "color": "ruby"}, {"name": "Clock2", "icon": "clock", "color": "amethyst"}]
];

@Component({
  selector: 'app-example',
  templateUrl: './layout-grid.component.html',
  styleUrls: ['./layout-grid.component.css']
})
export class LayoutGridComponent implements AfterViewInit {
  @ViewChild('scrollview', { read: ElementRef }) scrollview;
  @ViewChild('toggleDatasetBtn', { read: ElementRef }) toggleDatasetBtn;

  dataset = item2DArray;
  toggled = false;
  singlePage = false;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    console.log('IdsScrollView AfterViewInit')
  }

  /** 
   * Switches the datasets.  If the single page button is clicked,
   * The dataset displayed will always be the "alternate".
   */
  onDatasetToggle() {
    if (this.singlePage) {
      this.toggled = false;
      this.singlePage = false;
    }
    this.toggled = !this.toggled;
    this.dataset = this.toggled ? alternateItem2DArray : item2DArray;
    console.log('dataset toggle: ', this.toggled);
  }

  /**
   * Forces the displayed dataset to only have one item.
   */
  onDisplayOneItem() {
    this.dataset = singlePage2DArray;
    this.singlePage = true;
    console.log('showing one dataset item');
  }
}
