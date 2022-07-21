import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('focus init');
  }

}
