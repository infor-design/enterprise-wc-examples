import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-align-right',
  templateUrl: './icon-align-right.component.html',
  styleUrls: ['./icon-align-right.component.css']
})
export class IconAlignRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('IdsToggleButton icon-align-right OnInit');
  }

  handleToggle(e: Event | any) {
    e.target.toggle();
  }
}
