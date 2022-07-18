import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsColorPickerAxeComponent } from './ids-color-picker-axe.component';

describe('IdsColorPickerAxeComponent', () => {
  let component: IdsColorPickerAxeComponent;
  let fixture: ComponentFixture<IdsColorPickerAxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsColorPickerAxeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsColorPickerAxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
