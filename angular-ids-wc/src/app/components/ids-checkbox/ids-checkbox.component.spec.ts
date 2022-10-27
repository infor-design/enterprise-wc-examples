import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsCheckboxComponent } from './ids-checkbox.component';

describe('IdsCheckboxComponent', () => {
  let component: IdsCheckboxComponent;
  let fixture: ComponentFixture<IdsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
