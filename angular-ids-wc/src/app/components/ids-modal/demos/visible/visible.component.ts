import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-visible',
  templateUrl: './visible.component.html',
  styleUrls: ['./visible.component.css']
})
export class VisibleComponent implements OnInit {
  @ViewChild('modal', { read: ElementRef }) modal;

  constructor() { }

  ngOnInit(): void {
    console.log('visible init');
  }

  handleShow() {
    this.modal.nativeElement.show();
  }

  handleHide() {
    this.modal.nativeElement.hide();
  }

}
