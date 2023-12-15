import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-example-radio-deferred',
  templateUrl: './deferred.component.html',
  styleUrls: ['./deferred.component.css']
})
export class DeferredComponent {
  @ViewChild('displayRadiosBtnRef', { read: ElementRef }) displayRadiosBtnRef;
  @ViewChild('deferredRadioGroupRef', { read: ElementRef }) deferredRadioGroupRef;

  isCheckedDeferred = signal(false);

  constructor() { }

  onRadioChange(event) {
    const val = event.target.value;
    console.info(`Radio Group updated checked value to ${val}`);
  }
}
