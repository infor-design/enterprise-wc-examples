import { Component, AfterViewInit, ViewChild, ElementRef, Input, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandBoxComponent implements AfterViewInit {
  @ViewChild('dropdownCar', { read: ElementRef }) dropdownCar;
  @ViewChild('dropdownCarNgValue', { read: ElementRef }) dropdownCarNgValue;

  constructor() {
    console.log('carOptions', this.carOptions);
   }

  carOptions = [
    { name: "volvo", id: 1, idx: "1718693262079751588" },
    { name: "saab", id: 2, idx: "1718693262733452505" },
    { name: "opel", id: 3, idx: "1718693263497253422" },
    { name: "audi", id: 4, idx: "1718693264241054349" },
  ];

  ngAfterViewInit(): void {
  }

  selectedOption = signal(this.carOptions[2]);
  sourceKey = signal("name");

  onSelectionChange($event: string): void {
    console.log('onSelectionChange', $event);
    const newSelectedOption = this.carOptions.find((car) => car.idx === $event);
    this.selectedOption.set(newSelectedOption);
  }

  changeSelected(value: string): void {
    const nextCar = this.carOptions.find((car) => car.name === value);
    this.selectedOption.set(nextCar);
  }

  changeSourceKey(sourceKey: string): void {
    this.sourceKey.set(sourceKey);
  }

  onSelectionChange2($event: { name: string; id: number, idx: string }): void {
    console.log('onSelectionChange2', $event);
    const newSelectedOption = this.carOptions.find((car) => car === $event);
    this.selectedOption.set(newSelectedOption);
  }
}
