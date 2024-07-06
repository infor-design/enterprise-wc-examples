import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  badgePosition = ['top-right', 'top-left', 'bottom-right', 'bottom-left']

  ngOnInit(): void {
    console.log('example init');
  }

}
