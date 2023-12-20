import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-example-checkbox-deferred',
  templateUrl: './deferred.component.html',
  styleUrls: ['./deferred.component.css']
})
export class DeferredComponent {
  @ViewChild('displayCheckboxBtnRef', { read: ElementRef }) displayCheckboxBtnRef;
  @ViewChild('deferredCheckboxRef', { read: ElementRef }) deferredCheckboxRef;

  isCheckedDeferred = signal(false);

  constructor() { }

  onCheckboxChange(event) {
    const checked = event.target.checked;
    console.info(`Checkbox updated checked state to ${checked}`);
  }
}
