import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent {
  radio1 = 'radio1';
  radio2 = 'radio2';
  radio3 = 'radio3';
  testRadio = new FormControl(this.radio2);
}
