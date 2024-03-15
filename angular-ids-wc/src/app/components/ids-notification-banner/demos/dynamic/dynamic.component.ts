import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  notifications = [];
  testBanner = 'Test banner text';
  warningBanner = 'Warning Banner Text';
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

}
