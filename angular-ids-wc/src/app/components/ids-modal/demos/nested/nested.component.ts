import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
  @ViewChild('parentModal', { read: ElementRef }) parentModal;
  @ViewChild('nestedModal', { read: ElementRef }) nestedModal;

  constructor() { }

  ngOnInit(): void {
    console.log('nested init');
  }

  handleParentShow() {
    this.parentModal.nativeElement.show();
  }

  handleParentHide() {
    this.parentModal.nativeElement.hide();
  }

  handleNestedShow() {
    this.nestedModal.nativeElement.show();
  }

  handleNestedHide() {
    this.nestedModal.nativeElement.hide();
  }

}
