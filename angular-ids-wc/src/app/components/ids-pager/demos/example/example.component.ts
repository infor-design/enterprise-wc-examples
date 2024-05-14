import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import IdsPagerDropdown from 'ids-enterprise-wc/components/ids-pager/ids-pager-dropdown';

@Component({
  selector: 'app-example-pager',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {

  @ViewChild('pagerElement', { static: false }) pagerElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('example init');
  }

  ngAfterViewInit(): void {
    const pagerDropdown = new IdsPagerDropdown();

    pagerDropdown.slot = 'start';
    this.pagerElement.nativeElement.appendChild(pagerDropdown);
  }
}
