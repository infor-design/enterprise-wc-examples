import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('breadcrumb', { read: ElementRef }) breadcrumb;

  constructor() { }

  ngOnInit(): void {
    console.log('example OnInit');
  }

  ngAfterViewInit(): void {
    this.breadcrumb.nativeElement.onBreadcrumbActivate = (targetEl: any, previousEl: any) => {
      console.info(`New Breadcrumb: "${targetEl.textContent}"\nPrevious Breadcrumb: "${previousEl.textContent}"`);
    };
  }
}
