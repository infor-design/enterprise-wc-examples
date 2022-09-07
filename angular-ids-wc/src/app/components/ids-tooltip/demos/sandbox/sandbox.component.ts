import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SandboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('sandbox init');
  }

}
