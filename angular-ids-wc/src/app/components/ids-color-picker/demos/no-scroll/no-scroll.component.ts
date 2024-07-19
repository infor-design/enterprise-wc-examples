import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example-no-scroll',
  templateUrl: './no-scroll.component.html',
  styleUrls: ['./no-scroll.component.css']
})
export class NoScrollComponent implements OnInit {
  @Input() routes: any;



  constructor() { }

  ngOnInit(): void {
    console.log('Ids Color Picker example init');
  }

}
