import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.css']
})
export class HeaderTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('header tabs init');
  }

}
