import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-accordion',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('example init');
  }

}
