import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example-forms',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent implements AfterViewInit {
  @ViewChild('sampleForm') form: ElementRef;

  ngAfterViewInit(): void {
    const formElement = this.form.nativeElement;

    formElement.addEventListener('submit', (e: CustomEvent) => {
      e.preventDefault(); // Prevent default form submission
      formElement.checkValidation();
      console.info('Form Submitted', e.detail, formElement.isValid);
    });
  }
}
