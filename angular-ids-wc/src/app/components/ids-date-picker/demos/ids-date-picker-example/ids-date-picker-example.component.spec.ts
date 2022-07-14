import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsDatePickerExampleComponent } from './ids-date-picker-example.component';

describe('IdsDatePickerExampleComponent', () => {
  let component: IdsDatePickerExampleComponent;
  let fixture: ComponentFixture<IdsDatePickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsDatePickerExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsDatePickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
