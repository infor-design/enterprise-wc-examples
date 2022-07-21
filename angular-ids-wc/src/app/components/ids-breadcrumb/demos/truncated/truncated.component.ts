import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truncated',
  templateUrl: './truncated.component.html',
  styleUrls: ['./truncated.component.css']
})
export class TruncatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('truncated init');
  }

}
