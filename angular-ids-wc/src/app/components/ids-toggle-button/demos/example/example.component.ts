import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('IdsToggleButton example OnInit');
  }

  handleToggle(e: Event | any) {
    e.target.toggle();
  }
}
