import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  public testForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.testForm = new FormGroup({
      testInput: new FormControl('Original value', Validators.minLength(2)),
      testDateString: new FormControl('12/31/2020'),
      testDateDate: new FormControl(new Date('2020-12-31'))
    });
  }

  public onFormSubmit() {
    alert(`First name entered is: ${this.testForm.controls['testInput'].value}`);
    alert(`String date entered is: ${this.testForm.controls['testDateString'].value}`);
    alert(`Date date entered is: ${this.testForm.controls['testDateDate'].value}`);
  }

}
