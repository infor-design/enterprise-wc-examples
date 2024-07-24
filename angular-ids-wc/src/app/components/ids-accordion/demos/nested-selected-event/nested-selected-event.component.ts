import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-selected-event',
  templateUrl: './nested-selected-event.component.html',
  styleUrls: ['./nested-selected-event.component.css']
})
export class NestedSelectedEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('nested init');
  }

  handleSelection(name: string): void {
    console.log(name)
  }
}
