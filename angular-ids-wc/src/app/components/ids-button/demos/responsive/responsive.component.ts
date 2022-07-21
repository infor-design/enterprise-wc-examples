import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css']
})
export class ResponsiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('responsive init');
  }

}
