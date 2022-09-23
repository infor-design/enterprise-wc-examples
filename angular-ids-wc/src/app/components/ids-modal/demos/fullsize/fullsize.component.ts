import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullsize',
  templateUrl: './fullsize.component.html',
  styleUrls: ['./fullsize.component.css']
})
export class FullsizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('fullsize init');
  }

}
