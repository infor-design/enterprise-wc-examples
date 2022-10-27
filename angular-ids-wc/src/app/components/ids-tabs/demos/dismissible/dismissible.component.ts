import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dismissible',
  templateUrl: './dismissible.component.html',
  styleUrls: ['./dismissible.component.css']
})
export class DismissibleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('dismissble init');
  }

}
