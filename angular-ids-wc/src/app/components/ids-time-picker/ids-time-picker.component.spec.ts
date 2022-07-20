import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsTimePickerComponent } from './ids-time-picker.component';

describe('IdsTimePickerComponent', () => {
  let component: IdsTimePickerComponent;
  let fixture: ComponentFixture<IdsTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsTimePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
