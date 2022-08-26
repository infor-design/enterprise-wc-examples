import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import IdsPopupMenu from 'ids-enterprise-wc/components/ids-popup-menu/ids-popup-menu';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('menuButton1', { read: ElementRef }) menuButton1;
  @ViewChild('popupMenu1', { read: ElementRef }) popupMenu1: IdsPopupMenu;

  constructor() { }

  ngOnInit() {
    console.log('on init');
  }

  ngAfterViewInit(): void {
    this.menuButton1.nativeElement.menu = this.popupMenu1.nativeElement;
    this.popupMenu1.nativeElement.target = this.menuButton1.nativeElement;
  }
}
