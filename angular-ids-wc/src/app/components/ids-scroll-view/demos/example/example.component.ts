import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('scrollview', { read: ElementRef }) scrollview;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    console.log('IdsScrollView AfterViewInit')
  }
}
