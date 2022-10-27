import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input() routes: any;



  constructor() { }

  ngOnInit(): void {
    console.log('Ids Color Picker example init');
  }

}
