import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ids-input',
  templateUrl: './ids-input.component.html',
  styleUrls: ['./ids-input.component.css']
})
export class IdsInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('example init');
  }

}
