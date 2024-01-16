import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-input',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  public firstName = 'test name';

  constructor() { }

  ngOnInit(): void {
  }

}
