import { Component, AfterViewInit} from '@angular/core';
import { routes } from './ids-tag-routing.module';
import IdsTag from 'ids-enterprise-wc/components/ids-tag/ids-tag';

@Component({
  selector: 'app-ids-tag',
  templateUrl: './ids-tag.component.html',
  styleUrls: ['./ids-tag.component.css']
})
export class IdsTagComponent implements AfterViewInit {
  public routes = routes.filter(r => r.path !== '');

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Ids Tag init');
    const dynamicTag = new IdsTag()
    dynamicTag.textContent = 'Dynamic';
    document.body.append(dynamicTag);
  }
}
