import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsColorPickerExampleSizesComponent } from './ids-color-picker-example-sizes.component';

describe('IdsColorPickerExampleSizesComponent', () => {
  let component: IdsColorPickerExampleSizesComponent;
  let fixture: ComponentFixture<IdsColorPickerExampleSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsColorPickerExampleSizesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsColorPickerExampleSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
