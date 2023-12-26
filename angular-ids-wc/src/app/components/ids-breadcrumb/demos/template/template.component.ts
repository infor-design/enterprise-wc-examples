import { Component, OnInit } from '@angular/core';

import 'ids-enterprise-wc/components/ids-breadcrumb/ids-breadcrumb';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  breadCrumbList: { label: string }[] = [
    {
      label: "Breadcrumb 1"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('template init');
  }

  addBreadcrumb() {
    const length = this.breadCrumbList.length;
    this.breadCrumbList.push({ label: `Breadcrumb${length + 1}` });
  }
}
