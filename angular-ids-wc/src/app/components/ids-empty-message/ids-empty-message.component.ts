import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ids-empty-message',
  templateUrl: './ids-empty-message.component.html',
  styleUrls: ['./ids-empty-message.component.css']
})
export class IdsEmptyMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('empty message init');
  }

}
