import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsColorPickerExampleComponent } from './ids-color-picker-example.component';

describe('IdsColorPickerExampleComponent', () => {
  let component: IdsColorPickerExampleComponent;
  let fixture: ComponentFixture<IdsColorPickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsColorPickerExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsColorPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
