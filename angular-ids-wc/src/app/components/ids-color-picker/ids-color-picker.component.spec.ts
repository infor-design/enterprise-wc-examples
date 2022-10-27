import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsColorPickerComponent } from './ids-color-picker.component';

describe('IdsColorPickerComponent', () => {
  let component: IdsColorPickerComponent;
  let fixture: ComponentFixture<IdsColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsColorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
