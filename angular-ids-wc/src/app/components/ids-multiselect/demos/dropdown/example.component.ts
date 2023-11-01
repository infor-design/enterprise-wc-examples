import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  coldStates = [
    { id: "ak2", value: "ak", tooltip: "The State of Alaska", label: "Alaska" },
    { id: "me2", value: "me", tooltip: "The State of Maine", label: "Maine" },
  ];

  hotStates = [
    { id: "ca2", value: "ca", tooltip: "The State of California", label: "California" },
    { id: "fl2", value: "fl", tooltip: "The State of Florida", label: "Florida" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
