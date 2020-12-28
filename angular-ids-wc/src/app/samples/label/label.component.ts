import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
  inputs: ['font-size']
})
export class LabelComponent implements OnInit {
  public title: string = 'Labels / Typography';
  public sizeT: string = '14px';
  public fontSizes: Array<Number> = [
    10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 60, 72
  ];
  public fontSizePixels: Array<string>;
  constructor() {
    this.fontSizePixels = [...this.fontSizes].map((x) => {
      return `${x}px`;
    });
  }

  ngOnInit(): void { }
}
