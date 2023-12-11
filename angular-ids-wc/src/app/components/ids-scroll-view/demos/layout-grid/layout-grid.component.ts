import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

const item2DArray = [
  [{"name": "Clock1", "icon": "clock"}, {"name": "Clock2", "icon": "clock"}],
  [{"name": "Clock3", "icon": "clock"}, {"name": "Clock4", "icon": "clock"}],
  [{"name": "Clock5", "icon": "clock"}, {"name": "Clock6", "icon": "clock"}],
  [{"name": "Clock7", "icon": "clock"}, {"name": "Clock8", "icon": "clock"}],
  [{"name": "Clock9", "icon": "clock"}, {"name": "Clock10", "icon": "clock"}],
  [{"name": "Clock11", "icon": "clock"}, {"name": "Clock12", "icon": "clock"}],
  [{"name": "Clock13", "icon": "clock"}, {"name": "Clock14", "icon": "clock"}],
  [{"name": "Clock15", "icon": "clock"}, {"name": "Clock16", "icon": "clock"}],
  [{"name": "Clock17", "icon": "clock"}, {"name": "Clock18", "icon": "clock"}],
  [{"name": "Clock19", "icon": "clock"}, {"name": "Clock20", "icon": "clock"}]
];

const alternateItem2DArray = [
  [{"name": "Clock65", "icon": "clock"}, {"name": "Clock66", "icon": "clock"}],
  [{"name": "Clock67", "icon": "clock"}, {"name": "Clock68", "icon": "clock"}],
  [{"name": "Clock69", "icon": "clock"}, {"name": "Clock70", "icon": "clock"}],
  [{"name": "Clock71", "icon": "clock"}, {"name": "Clock72", "icon": "clock"}],
  [{"name": "Clock73", "icon": "clock"}, {"name": "Clock74", "icon": "clock"}],
  [{"name": "Clock75", "icon": "clock"}, {"name": "Clock76", "icon": "clock"}],
  [{"name": "Clock77", "icon": "clock"}, {"name": "Clock78", "icon": "clock"}],
  [{"name": "Clock79", "icon": "clock"}, {"name": "Clock80", "icon": "clock"}],
  [{"name": "Clock81", "icon": "clock"}, {"name": "Clock82", "icon": "clock"}],
  [{"name": "Clock83", "icon": "clock"}, {"name": "Clock84", "icon": "clock"}]
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

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    console.log('IdsScrollView AfterViewInit')
  }

  onDatasetChange() {
    this.toggled = !this.toggled;
    this.dataset = this.toggled ? alternateItem2DArray : item2DArray;
    console.log('dataset toggle: ', this.toggled);
  }
}
