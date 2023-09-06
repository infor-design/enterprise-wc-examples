import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators} from '@angular/forms'

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
      testCheckbox: new FormControl(),
      testDateObject: new FormControl(new Date()),
      testDateString: new FormControl('12/31/2020'),
      testDropdown: new FormControl('opt5'),
      testInput: new FormControl('Original value', Validators.minLength(2)),
      testLookup: new FormControl(),
      testTextarea: new FormControl(),
      testTimePicker: new FormControl(),
      testRadio: new FormControl(),
      testSearchField: new FormControl(),
      testSpinbox: new FormControl(),
      testSwitch: new FormControl(),
      testUpload: new FormControl(),
      testUploadAdvanced: new FormControl(),
    });
  }

  public onFormSubmit() {
    console.log(`testCheckbox selected is: ${this.testForm.controls['testCheckbox'].value}`);
    console.log(`testDateObject entered is: ${this.testForm.controls['testDateObject'].value}`);
    console.log(`testDateString entered is: ${this.testForm.controls['testDateString'].value}`);
    console.log(`testDropdown selected is: ${this.testForm.controls['testDropdown'].value}`);
    console.log(`testInput entered is: ${this.testForm.controls['testInput'].value}`);
    console.log(`testLookup entered is: ${this.testForm.controls['testLookup'].value}`);
    console.log(`testTextarea entered is: ${this.testForm.controls['testTextarea'].value}`);
    console.log(`testTimePicker entered is: ${this.testForm.controls['testTimePicker'].value}`);
    console.log(`testRadio selected is: ${this.testForm.controls['testRadio'].value}`);
    console.log(`testSearchField selected is: ${this.testForm.controls['testSearchField'].value}`);
    console.log(`testSpinbox selected is: ${this.testForm.controls['testSpinbox'].value}`);
    console.log(`testSwitch selected is: ${this.testForm.controls['testSwitch'].value}`);
    console.log(`testUpload selected is: ${this.testForm.controls['testUpload'].value}`);
    console.log(`testUploadAdvanced selected is: ${this.testForm.controls['testUploadAdvanced'].value}`);
  }

}
