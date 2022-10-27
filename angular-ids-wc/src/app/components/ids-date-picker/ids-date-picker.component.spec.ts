import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsDatePickerComponent } from './ids-date-picker.component';

describe('IdsDatePickerComponent', () => {
  let component: IdsDatePickerComponent;
  let fixture: ComponentFixture<IdsDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
