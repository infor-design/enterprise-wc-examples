import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-example-breadcrumb-deferred',
  templateUrl: './deferred.component.html'
})
export class DeferredComponent {
  @ViewChild('displayBreadCrumbRef', { read: ElementRef }) displayBreadCrumbRef;
  @ViewChild('deferredBreadCrumbRef', { read: ElementRef }) deferredBreadCrumbRef;

  isCheckedDeferred = signal(false);

  constructor() { }
}
