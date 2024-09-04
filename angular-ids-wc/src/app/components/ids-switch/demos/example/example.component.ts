import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-switch',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  handleChange(evt) {
    console.info('IdsSwitch Change', evt.detail);
  }
}
