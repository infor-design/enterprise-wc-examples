import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-selected',
  templateUrl: './display-selected.component.html',
  styleUrls: ['./display-selected.component.css']
})
export class DisplaySelectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('display selected init');
  }

}
