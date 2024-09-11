import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-example-reactive-forms',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  public testForm: FormGroup;

  testDropdown0IndexValues = [
    { address: { line1: '012 Hollywood Blvd', line2: 'Suite 210', city: 'Los Angeles', state: 'CA' } },
    { address: { line1: '123 South Beach Ave', line2: 'Suite 321', city: 'Miami', state: 'FL' } },
    { address: { line1: '234 Main St', line2: 'Suite 432', city: 'Atlanta', state: 'GA' } },
    { address: { line1: '345 Wall St', line2: 'Suite 543', city: 'New York City', state: 'NY' } },
    { address: { line1: '456 State St', line2: 'Suite 654', city: 'Philadelphia', state: 'PA' } },
    { address: { line1: '567 Rodeo Dr', line2: 'Suite 765', city: 'Dallas', state: 'TX' } },
    { address: { line1: '678 Broad St', line2: 'Suite 876', city: 'Seattle', state: 'WA' } },
  ];

  constructor() { }

  ngOnInit(): void {
    this.testForm = new FormGroup({
      testCheckbox: new FormControl(),
      testCheckboxGroup: new FormControl(),
      testColor: new FormControl(),
      testDateObject: new FormControl(new Date()),
      testDateString: new FormControl('12/31/2020'),
      testDropdown: new FormControl('opt5'),
      testDropdown0Index: new FormControl(null),
      testMultiselect: new FormControl(['opt1', 'opt3']),
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
    console.log(`FormControl(testCheckbox) value is: ${this.testForm.controls['testCheckbox'].value}`);
    console.log(`FormControl(testCheckboxGroup) value is: ${this.testForm.controls['testCheckboxGroup'].value}`);
    console.log(`FormControl(testColor) value is: ${this.testForm.controls['testColor'].value}`);
    console.log(`FormControl(testDateObject) value is: ${this.testForm.controls['testDateObject'].value}`);
    console.log(`FormControl(testDateString) value is: ${this.testForm.controls['testDateString'].value}`);
    console.log(`FormControl(testDropdown) value is: ${this.testForm.controls['testDropdown'].value}`);
    console.log(`FormControl(testDropdown0Index) value is: ${this.testForm.controls['testDropdown0Index'].value}`);
    console.log(`FormControl(testMultiselect) value is: ${this.testForm.controls['testMultiselect'].value}`);
    console.log(`FormControl(testInput) value is: ${this.testForm.controls['testInput'].value}`);
    console.log(`FormControl(testLookup) value is: ${this.testForm.controls['testLookup'].value}`);
    console.log(`FormControl(testTextarea) value is: ${this.testForm.controls['testTextarea'].value}`);
    console.log(`FormControl(testTimePicker) value is: ${this.testForm.controls['testTimePicker'].value}`);
    console.log(`FormControl(testRadio) value is: ${this.testForm.controls['testRadio'].value}`);
    console.log(`FormControl(testSearchField) value is: ${this.testForm.controls['testSearchField'].value}`);
    console.log(`FormControl(testSpinbox) value is: ${this.testForm.controls['testSpinbox'].value}`);
    console.log(`FormControl(testSwitch) value is: ${this.testForm.controls['testSwitch'].value}`);
    console.log(`FormControl(testUpload) value is: ${this.testForm.controls['testUpload'].value}`);
    console.log(`FormControl(testUploadAdvanced) value is: ${this.testForm.controls['testUploadAdvanced'].value}`);


    document.querySelectorAll<any>('[ngDefaultControl]').forEach((input) => {
      console.log(`${input?.name} -> value is: `, input.value);
    });
  }

  public updateModel() {
    const randomText = (wordCount) => Array(wordCount).fill(Math.random().toString(32).substring(2)).join(' ');
    const randomDate = () => new Date(Math.floor(Math.random()*(10**12.5)));

    const nextDropdownValue = {
      blank: 'opt1',
      opt1: 'opt2',
      opt2: 'opt3',
      opt3: 'opt4',
      opt4: 'opt5',
      opt5: 'opt6',
      opt6: 'blank',
    }[this.testForm.controls['testDropdown'].value] ?? 'opt1';

    const nextDropdown0IndexValue = {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6,
      6: 0,
    }[this.testForm.controls['testDropdown0Index'].value] ?? 1;

    const nextMultiselectValue = {
      blank: 'opt1',
      opt1: 'opt2',
      opt2: 'opt3',
      opt3: 'opt4',
      opt4: 'opt5',
      opt5: 'opt6',
      opt6: 'blank',
    }[this.testForm.controls['testMultiselect'].value] ?? 'opt1';

    const nextRadioValue = {
      radio1: 'radio2',
      radio2: 'radio1',
    }[this.testForm.controls['testRadio'].value] ?? 'radio1';

    this.testForm.controls['testSwitch'].setValue(!this.testForm.controls['testSwitch'].value);
    this.testForm.controls['testCheckbox'].setValue(!this.testForm.controls['testCheckbox'].value);
    this.testForm.controls['testCheckboxGroup'].setValue(!this.testForm.controls['testCheckboxGroup'].value);

    this.testForm.controls['testDateObject'].setValue(randomDate());
    this.testForm.controls['testDateString'].setValue(randomDate().toLocaleDateString());
    this.testForm.controls['testTimePicker'].setValue(randomDate().toLocaleTimeString());

    this.testForm.controls['testInput'].setValue(randomText(2));
    this.testForm.controls['testLookup'].setValue(randomText(2));
    this.testForm.controls['testTextarea'].setValue(randomText(9));
    this.testForm.controls['testSearchField'].setValue(randomText(3));

    this.testForm.controls['testDropdown'].setValue(nextDropdownValue);
    this.testForm.controls['testDropdown0Index'].setValue(nextDropdown0IndexValue);
    this.testForm.controls['testMultiselect'].setValue(nextMultiselectValue);

    this.testForm.controls['testRadio'].setValue(nextRadioValue);

    this.testForm.controls['testSpinbox'].setValue(Math.floor(Math.random() * 100));

    this.testForm.controls['testUpload'].setValue(`${randomText(2).split(' ').join('/')}.txt`);
    this.testForm.controls['testUploadAdvanced'].setValue(`${randomText(3).split(' ').join('/')}.txt`);

    this.onFormSubmit();
  }

}
