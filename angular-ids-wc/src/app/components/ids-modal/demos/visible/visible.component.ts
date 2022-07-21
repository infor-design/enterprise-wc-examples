import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visible',
  templateUrl: './visible.component.html',
  styleUrls: ['./visible.component.css']
})
export class VisibleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('visible init');
  }

}
