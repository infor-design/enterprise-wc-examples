import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-disabled',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.css']
})
export class DisabledComponent implements OnInit, AfterViewInit {
  @ViewChild('menuBtnEl', { read: ElementRef }) menuBtnEl;
  public disabled: boolean;
  public defaultOnOutsideClick: Function;

  constructor() { }

  ngOnInit(): void {
    console.log('ids-menu-button disabled OnInit');
  }

  ngAfterViewInit(): void {
    this.defaultOnOutsideClick = this.menuBtnEl.nativeElement.menuEl.onOutsideClick;
  }

  handleDisabledCheck(e: Event | any) {
    this.disabled = e.target.checked;
  }

  handleForceMenuCheck(e: Event | any) {
    const checked = e.target.checked;
    this.menuBtnEl.nativeElement.menuEl.keepOpen = checked;
    console.log(checked);
    if (checked) {
      this.menuBtnEl.nativeElement.menuEl.show();
      this.menuBtnEl.nativeElement.menuEl.onOutsideClick = () => {};
    } else {
      this.menuBtnEl.nativeElement.menuEl.onOutsideClick = this.defaultOnOutsideClick;
    }
  }
}
