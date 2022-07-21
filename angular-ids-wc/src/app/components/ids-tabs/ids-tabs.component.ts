import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ids-tabs',
  templateUrl: './ids-tabs.component.html',
  styleUrls: ['./ids-tabs.component.css']
})
export class IdsTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('tabs init');
  }

}
