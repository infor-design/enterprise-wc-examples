import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-example-scroll-view',
  templateUrl: './layout-grid.component.html',
  styleUrls: ['./layout-grid.component.css']
})
export class LayoutGridComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollview', { read: ElementRef }) scrollview;
  @ViewChild('toggleDatasetBtn', { read: ElementRef }) toggleDatasetBtn;

  dataset = [];
  toggled = false;
  singlePage = false;

  constructor(
    private router: Router
  ) { }

  private layoutGridDataDictionary = {
    primary: '/api/scroll-view-clocks-main.json',
    secondary: '/api/scroll-view-clocks-secondary.json',
    single: '/api/scroll-view-clocks-single.json'
  }

  private async loadLayoutGridData(type: string) {
    const layoutGridRes = await fetch(this.layoutGridDataDictionary[type]);
    const layoutGridData = await layoutGridRes.json();
    this.dataset = layoutGridData;
  }

  ngOnInit(): void {
    console.log('IdsScrollView OnInit');
    this.loadLayoutGridData('primary');
  }

  ngAfterViewInit(): void {
    console.log('IdsScrollView AfterViewInit');
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
    const targetDataset = this.toggled ? 'secondary' : 'primary';

    this.loadLayoutGridData(targetDataset);
    console.log('dataset toggle: ', targetDataset);
  }

  /**
   * Forces the displayed dataset to only have one item.
   */
  onDisplayOneItem() {
    this.loadLayoutGridData('single');
    this.singlePage = true;
    console.log('dataset toggle: single');
  }
}
