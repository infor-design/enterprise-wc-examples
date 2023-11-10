import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  testCheckbox = {
    one: false,
    two: true,
    three: false,
  };
  testDateObject = new Date();
  testDateString = '12/31/2020';
  testDropdown = 'opt5';
  testMultiselect = 'opt3';
  testInput = 'John Doe';
  testLookup = 'Software Engineers';
  testTextarea = 'Hello, World!';
  testTimePicker = '11:00 PM';
  testRadio = 'radio2';
  testSearchField = 'key words to search';
  testSpinbox = 9;
  testSwitch = true;
  testUpload = 'path/to/file.txt';
  testUploadAdvanced = 'testUploadAdvanced value here';

  onUpdate(event): void {
    console.log(`onUpdate(${event})`);
  }
}
