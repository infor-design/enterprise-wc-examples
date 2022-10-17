import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import IdsToolbar from 'ids-enterprise-wc/components/ids-toolbar/ids-toolbar';
import IdsMenuButton from 'ids-enterprise-wc/components/ids-menu-button/ids-menu-button';

@Component({
  selector: 'app-toolbar-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('example init');
  }

}
