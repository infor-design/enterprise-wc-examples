import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, AfterViewInit {
  @ViewChild('messageEvent', { read: ElementRef }) messageEvent;
  @ViewChild('messageEventTrigger', { read: ElementRef }) messageEventTrigger;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMessage events OnInit');
  }

  ngAfterViewInit(): void {
    this.messageEvent.nativeElement.target = this.messageEventTrigger.nativeElement;
    this.messageEvent.nativeElement.triggerType = 'click';

    this.messageEvent.nativeElement.onButtonClick = (buttonEl: any) => {
      const response = buttonEl.cancel ? 'cancelled' : 'confirmed';
      console.info(`IdsMessage was ${response}`);
      this.messageEvent.nativeElement.hide();
    };
  }

  handleBeforeShow() {
    this.messageEventTrigger.nativeElement.disabled = true;
    return true;
  }

  handleHide() {
    console.info('Modal event "hide" triggered');
    this.messageEventTrigger.nativeElement.disabled = false;
  }

  handleShow() {
    console.info('Modal event "show" triggered');
    return true;
  }
}
