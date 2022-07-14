import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import IdsDropdown from 'ids-enterprise-wc/components/ids-dropdown/ids-dropdown.js';
import statesJSON from '../../../../assets/data/states.js';

@Component({
  selector: 'app-ids-dropdown-example',
  templateUrl: './ids-dropdown-example.component.html',
  styleUrls: ['./ids-dropdown-example.component.css']
})
export class IdsDropdownExampleComponent implements AfterViewInit {
  @ViewChild('dropdown1', { read: ElementRef }) dropdown1: IdsDropdown;
  constructor() { }

  ngAfterViewInit(): void {
    this.dropdown1.nativeElement?.addEventListener('change', (e: any) => {
      console.log(e);
      console.info(`Value Changed to ${e.target.value}: ${e.target.selectedOption.textContent}`);
    });
    
    this.dropdown1.nativeElement?.addEventListener('focus', (e: any) => {
      console.info(`Focus Changed to`, e.target);
    });
  }

}
