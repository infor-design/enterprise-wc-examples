import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keep-open',
  templateUrl: './keep-open.component.html',
  styleUrls: ['./keep-open.component.css']
})
export class KeepOpenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('keep-open init');
  }

}
