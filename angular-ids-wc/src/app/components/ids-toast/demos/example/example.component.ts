import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-toast',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  
  constructor() { }

  container = null;
  
  ngOnInit(): void {
    console.log('example init');
    this.container = document.querySelector('ids-container');
  }

  handleToast() {
    const toastId = 'test-demo-toast';
    let toast: any = document.querySelector(`#${toastId}`);
    if (!toast) {
      toast = document.createElement('ids-toast');
      toast.setAttribute('id', toastId);
      this.container?.appendChild(toast);
    }
    toast.show({
      title: 'Application Offline',
      message: 'This is a Toast message.'
    });
  }
}
