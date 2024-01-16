import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
  @ViewChild('modal', { read: ElementRef }) modal;
  @ViewChild('settingCaptureCheck', { read: ElementRef }) settingCaptureCheck;
  @ViewChild('settingCycleCheck', { read: ElementRef }) settingCycleCheck;

  constructor() { }

  ngOnInit(): void {
    console.log('focus init');
  }

  handleShow() {
    this.modal.nativeElement.show();
  }

  handleHide() {
    this.modal.nativeElement.hide();
  }

  handleSettingCaptureChange(e: Event) {
    console.info('change "capture focus" setting');
    this.modal.nativeElement.capturesFocus = (e.target as any).checked;
  }

  handleSettingCycleChange(e: Event) {
    console.info('change "cycle focus" setting');
    this.modal.nativeElement.cyclesFocus = (e.target as any).checked;
  }
}
