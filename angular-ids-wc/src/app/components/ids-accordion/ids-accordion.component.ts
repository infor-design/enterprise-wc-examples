import { ActivatedRoute } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ids-accordion',
  templateUrl: './ids-accordion.component.html',
  styleUrls: ['./ids-accordion.component.css']
})
export class IdsAccordionComponent implements AfterViewInit {
  children: any;

  constructor(route: ActivatedRoute) {
    // route.url.subscribe(() => {
    //   this.children = route.snapshot.routeConfig.children;
    //   console.log(this.children);
    // });
  }

  ngAfterViewInit(): void { }

}
