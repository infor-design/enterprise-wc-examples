import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-example',
  templateUrl: './layout-grid.component.html',
  styleUrls: ['./layout-grid.component.css']
})
export class LayoutGridComponent implements AfterViewInit {
  @ViewChild('scrollview', { read: ElementRef }) scrollview;

  item2DArray = [];

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    console.log('IdsScrollView AfterViewInit')
  }
}
