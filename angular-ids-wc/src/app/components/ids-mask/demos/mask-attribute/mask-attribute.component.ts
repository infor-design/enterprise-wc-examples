import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mask-attribute',
  templateUrl: './mask-attribute.component.html',
  styleUrls: ['./mask-attribute.component.css']
})
export class MaskAttributeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMask mask-attribute OnInit');
  }

}
