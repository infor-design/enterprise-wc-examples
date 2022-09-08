import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-overlay-opacity',
  templateUrl: './overlay-opacity.component.html',
  styleUrls: ['./overlay-opacity.component.css']
})
export class OverlayOpacityComponent implements OnInit, AfterViewInit {
  @ViewChild('messageOpacity2', { read: ElementRef }) messageOpacity2;
  @ViewChild('messageOpacity4', { read: ElementRef }) messageOpacity4;
  @ViewChild('messageOpacity6', { read: ElementRef }) messageOpacity6;
  @ViewChild('messageOpacity8', { read: ElementRef }) messageOpacity8;
  @ViewChild('messageOpacity10', { read: ElementRef }) messageOpacity10;
  @ViewChild('messageOpacity2Trigger', { read: ElementRef }) messageOpacity2Trigger;
  @ViewChild('messageOpacity4Trigger', { read: ElementRef }) messageOpacity4Trigger;
  @ViewChild('messageOpacity6Trigger', { read: ElementRef }) messageOpacity6Trigger;
  @ViewChild('messageOpacity8Trigger', { read: ElementRef }) messageOpacity8Trigger;
  @ViewChild('messageOpacity10Trigger', { read: ElementRef }) messageOpacity10Trigger;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMessage overlay opacity OnInit');
  }

  ngAfterViewInit(): void {
    this.setupMessage(this.messageOpacity2.nativeElement, this.messageOpacity2Trigger.nativeElement);
    this.setupMessage(this.messageOpacity4.nativeElement, this.messageOpacity4Trigger.nativeElement);
    this.setupMessage(this.messageOpacity6.nativeElement, this.messageOpacity6Trigger.nativeElement);
    this.setupMessage(this.messageOpacity8.nativeElement, this.messageOpacity8Trigger.nativeElement);
    this.setupMessage(this.messageOpacity10.nativeElement, this.messageOpacity10Trigger.nativeElement);
  }

  setupMessage = (messageEl: any, triggerBtnEl: any) => {
    // Link the Message to its trigger button
    messageEl.target = triggerBtnEl;
    messageEl.triggerType = 'click';
  
    // Disable the trigger button when showing the Modal.
    messageEl.addEventListener('beforeshow', () => {
      triggerBtnEl.disabled = true;
      return true;
    });
  
    // Setup the response callback
    messageEl.onButtonClick = (buttonEl: any) => {
      const response = buttonEl.cancel ? 'cancel' : buttonEl.text;
      console.info(`IdsMessage with title "${messageEl.title}" had its "${response}" button clicked`);
      messageEl.hide();
    };
  
    // After the modal is done hiding, re-enable its trigger button.
    messageEl.addEventListener('hide', () => {
      triggerBtnEl.disabled = false;
    });
  };
}
