import { Component, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit, AfterViewInit {
  @ViewChild('programmaticNotification', { read: ElementRef }) programmaticNotification;

  dynamicText: string = 'Test dynamic text';
  testBanner: string = 'Test banner text';
  warningBanner: string = 'Warning Banner Text';
  notifications = [];
  filteredGridObjects = [];

  constructor() { }

  ngOnInit(): void {
    console.log('dynamic init');
    this.notifications.push({
      id: 1,
      type: 'error',
      message: 'This is an error message'
    });
    this.filteredGridObjects = this.notifications;
    this.testBanner = 'This is a test banner';
  }

  ngAfterViewInit(): void {
    console.log('example AfterViewInit', this.programmaticNotification);

    this.programmaticNotification?.nativeElement?.add({
      id: 'ids-notification-banner-7',
      type: 'error',
      messageText: 'Something went wrong',
      link: 'https://infor.com'
    });
  }

}
