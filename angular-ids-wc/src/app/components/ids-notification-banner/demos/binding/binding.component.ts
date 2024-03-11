import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  errorMessageInterpolation = 'Error message with interpolation binding {{ }}';
  errorMessageProperty = 'Error message with property binding []';

  constructor() { }

  ngOnInit(): void {
    console.log('binding init');
  }
}
