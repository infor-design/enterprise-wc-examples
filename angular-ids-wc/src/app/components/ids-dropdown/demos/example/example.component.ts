import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/shared/mock/data.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('dropdown1', { read: ElementRef }) dropdown1;
  @ViewChild('dropdownAsync', { read: ElementRef }) dropdownAsync;
  @Input() options = new Subject<Array<any>>();

  constructor(
    public dataService: DataService
  ) { }

  ngAfterViewInit(): void {
    this.dataService.getJsonData('states')
      .subscribe(res => {
        function beforeShow() {
          return res;
        }
        this.dropdownAsync.nativeElement.beforeShow = beforeShow;
      });
  }

  handleChange(e: any) {
    console.info(`Value Changed to ${e.target.value}: ${e.target.selectedOption.textContent}`);
  }

  handleFocus(e: any) {
    console.info(`Focus Changed to ${e.target}`);
  }
}
