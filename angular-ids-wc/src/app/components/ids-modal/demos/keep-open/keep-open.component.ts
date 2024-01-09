import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-keep-open',
  templateUrl: './keep-open.component.html',
  styleUrls: ['./keep-open.component.css']
})
export class KeepOpenComponent implements OnInit, AfterViewInit {
  @ViewChild('modal', { read: ElementRef }) modal;
  @ViewChild('closeOutsideCheck', { read: ElementRef }) closeOutsideCheck;

  private defaultOnOutsideClick;

  constructor() { }

  ngOnInit(): void {
    console.log('keep-open init');
  }

  ngAfterViewInit(): void {
    this.defaultOnOutsideClick = this.modal.nativeElement.onOutsideClick;
  }

  handleShow() {
    this.modal.nativeElement.show();
  }

  handleHide() {
    this.modal.nativeElement.hide();
  }

  handleClickOutsideChange(e: Event) {
    const isChecked = (e.target as any).checked;
    if (isChecked) {
      this.modal.nativeElement.onOutsideClick = this.defaultOnOutsideClick;
    } else {
      // Overrides the default `onOutsideClick` to just keep the Modal open
      this.modal.nativeElement.onOutsideClick = () => { };
    }
  }
}
