import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Dropdown Typeahead init')
  }

}
