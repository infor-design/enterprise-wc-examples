import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ids-action-sheet',
  templateUrl: './ids-action-sheet.component.html',
  styleUrls: ['./ids-action-sheet.component.css']
})
export class IdsActionSheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('action-sheet init');
  }

}
