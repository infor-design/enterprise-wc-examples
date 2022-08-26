import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import IdsPopupMenu from 'ids-enterprise-wc/components/ids-popup-menu/ids-popup-menu';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('menuBtnEl', { read: ElementRef }) menuBtnEl: IdsPopupMenu;

  constructor() { }

  ngOnInit() {
    console.log('on init');
  }

  ngAfterViewInit(): void {
    console.log(this.menuBtnEl.nativeElement.menuEl);
  }

  handleShow(e) {
    console.log(e);
    // this.menuBtnEl.nativeElement.menuEl.show();
    // this.menuBtnEl.nativeElement.menuEl.trigger
  }

  handleBeforeShow(e) {
    console.log(e);
  }

}
