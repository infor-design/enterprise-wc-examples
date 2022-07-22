import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: ['./notification-badge.component.css']
})
export class NotificationBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('notification badge');
  }

}
