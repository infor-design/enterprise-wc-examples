import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import avatarPlaceHolder from '../../../../assets/images/avatar-placeholder.jpg';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('avatarImage', { read: ElementRef }) avatarImage;
  public visible: boolean;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log('example init');
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit');
    // this.avatarImage.nativeElement.src = this.sanitizer
    //   .bypassSecurityTrustResourceUrl(`data:image/png;base64, ${avatarPlaceHolder}`);
  }

  handleClick() {
    this.visible = !this.visible;
  }

}
