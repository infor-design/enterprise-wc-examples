import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// declare var require: any
// const camera1 = require('assets/images/camera-1.png').default as string;
// import camera2 from '../../../../assets/images/camera-2.png';
// import camera3 from '../../../../assets/images/camera-3.png';
// import camera4 from '../../../../assets/images/camera-4.png';
// import camera5 from '../../../../assets/images/camera-5.png';
// import camera6 from '../../../../assets/images/camera-6.png';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('camera1Img', { read: ElementRef }) camera1Img: any;
  // @ViewChild('camera2Img', { read: ElementRef }) camera2Img: any;
  // @ViewChild('camera3Img', { read: ElementRef }) camera3Img: any;
  // @ViewChild('camera4Img', { read: ElementRef }) camera4Img: any;
  // @ViewChild('camera5Img', { read: ElementRef }) camera5Img: any;
  // @ViewChild('camera6Img', { read: ElementRef }) camera6Img: any;

  // public camera1 = '../../../../assets/images/camera-1.png';
  // import camera2 from '../../../../assets/images/camera-2.png';
  // import camera3 from '../../../../assets/images/camera-3.png';
  // import camera4 from '../../../../assets/images/camera-4.png';
  // import camera5 from '../../../../assets/images/camera-5.png';
  // import camera6 from '../../../../assets/images/camera-6.png';

  constructor() { }

  ngAfterViewInit(): void {
    console.log('scroll view example init')
    // console.log(this.camera1Img.nativeElement.src)
    // this.camera1Img.nativeElement.src = camera1;
    // this.camera2Img.nativeElement.src = camera2;
    // this.camera3Img.nativeElement.src = camera3;
    // this.camera4Img.nativeElement.src = camera4;
    // this.camera5Img.nativeElement.src = camera5;
    // this.camera6Img.nativeElement.src = camera6;
  }

}
