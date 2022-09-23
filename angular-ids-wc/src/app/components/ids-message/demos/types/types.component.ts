import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit, AfterViewInit {
  @ViewChild('messageError', { read: ElementRef }) messageError;
  @ViewChild('messageAlert', { read: ElementRef }) messageAlert;
  @ViewChild('messageSuccess', { read: ElementRef }) messageSuccess;
  @ViewChild('messageInfo', { read: ElementRef }) messageInfo;
  @ViewChild('messageConfirmation', { read: ElementRef }) messageConfirmation;
  @ViewChild('messageHugeText', { read: ElementRef }) messageHugeText;
  @ViewChild('messageNoButtons', { read: ElementRef }) messageNoButtons;
  @ViewChild('messageAllowTags', { read: ElementRef }) messageAllowTags;
  @ViewChild('messageDisallowTags', { read: ElementRef }) messageDisallowTags;
  @ViewChild('messageErrorTrigger', { read: ElementRef }) messageErrorTrigger;
  @ViewChild('messageAlertTrigger', { read: ElementRef }) messageAlertTrigger;
  @ViewChild('messageSuccessTrigger', { read: ElementRef }) messageSuccessTrigger;
  @ViewChild('messageInfoTrigger', { read: ElementRef }) messageInfoTrigger;
  @ViewChild('messageConfirmationTrigger', { read: ElementRef }) messageConfirmationTrigger;
  @ViewChild('messageHugeTextTrigger', { read: ElementRef }) messageHugeTextTrigger;
  @ViewChild('messageAllowTagsTrigger', { read: ElementRef }) messageAllowTagsTrigger;
  @ViewChild('messageDisallowTagsTrigger', { read: ElementRef }) messageDisallowTagsTrigger;
  @ViewChild('messageNoButtonsTrigger', { read: ElementRef }) messageNoButtonsTrigger;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMessage types OnInit');
  }

  ngAfterViewInit(): void {
    this.setupMessage(this.messageError.nativeElement, this.messageErrorTrigger.nativeElement);
    this.setupMessage(this.messageAlert.nativeElement, this.messageAlertTrigger.nativeElement);
    this.setupMessage(this.messageSuccess.nativeElement, this.messageSuccessTrigger.nativeElement);
    this.setupMessage(this.messageInfo.nativeElement, this.messageInfoTrigger.nativeElement);
    this.setupMessage(this.messageConfirmation.nativeElement, this.messageConfirmationTrigger.nativeElement);
    this.setupMessage(this.messageHugeText.nativeElement, this.messageHugeTextTrigger.nativeElement);
    this.setupMessage(this.messageNoButtons.nativeElement, this.messageNoButtonsTrigger.nativeElement);
    this.setupMessage(this.messageAllowTags.nativeElement, this.messageAllowTagsTrigger.nativeElement);
    this.setupMessage(this.messageDisallowTags.nativeElement, this.messageDisallowTagsTrigger.nativeElement);
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
