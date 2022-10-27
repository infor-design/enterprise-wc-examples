import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('errorPage', { read: ElementRef }) errorPage;

  constructor() { }

  ngOnInit(): void {
    console.log('IdsErrorPage example OnInit');
  }

  ngAfterViewInit(): void {
    this.errorPage.nativeElement.popup.animated = false;
  }

  handleActionButton() {
    this.errorPage.nativeElement.popup.animated = true;
    this.errorPage.nativeElement.visible = false;
  }

  handleBeforeHide(e: CustomEvent) {
    e.detail.response(false);
  }
}
