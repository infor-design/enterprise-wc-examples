import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swappable',
  templateUrl: './swappable.component.html',
  styleUrls: ['./swappable.component.css']
})
export class SwappableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('swappable init');
  }

}
