import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsSpinboxComponent } from './ids-spinbox.component';

describe('IdsSpinboxComponent', () => {
  let component: IdsSpinboxComponent;
  let fixture: ComponentFixture<IdsSpinboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsSpinboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsSpinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
