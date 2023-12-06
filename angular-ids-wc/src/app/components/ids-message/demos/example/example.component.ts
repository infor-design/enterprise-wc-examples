import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('messageError', { read: ElementRef }) messageError;
  @ViewChild('messageErrorTrigger', { read: ElementRef }) messageErrorTrigger;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsMessage example OnInit');
  }

  ngAfterViewInit(): void {
    if (!this.messageError) {
      return;
    }
    this.messageError.nativeElement.target = this.messageErrorTrigger.nativeElement;
    this.messageError.nativeElement.triggerType = 'click';

    this.messageError.nativeElement.onButtonClick = (buttonEl: any) => {
      this.messageError.nativeElement.hide();
      
      const response = buttonEl.cancel ? 'cancelled' : 'confirmed';
      console.info(`IdsMessage was ${response}`);
    };
  }

  handleBeforeShow() {
    this.messageErrorTrigger.nativeElement.disabled = true;
    return true;
  }

  handleHide() {
    this.messageErrorTrigger.nativeElement.disabled = false;
  }
}
