import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-fallback-slot',
  templateUrl: './test-fallback-slot.component.html',
  styleUrls: ['./test-fallback-slot.component.css']
})
export class TestFallbackSlotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('test fallback init');
  }

}
