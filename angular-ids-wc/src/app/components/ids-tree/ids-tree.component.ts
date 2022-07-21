import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ids-tree',
  templateUrl: './ids-tree.component.html',
  styleUrls: ['./ids-tree.component.css']
})
export class IdsTreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ids-tree init');
  }

}
