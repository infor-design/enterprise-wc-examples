import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-opacity',
  templateUrl: './overlay-opacity.component.html',
  styleUrls: ['./overlay-opacity.component.css']
})
export class OverlayOpacityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('overlay opacity');
  }

}
